import axios from "axios";
import { getUser, setUser, removeUser } from "../utils/auth";
import { authApi } from "./authService";

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

// 2. Track the refresh state with proper types
let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: any, token: string | null = null): void => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });

  failedQueue = [];
};

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getUser()?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.response?.data.message[0] !== "INVALID_REFRESH_TOKEN" &&
      !originalRequest._retry
    ) {
      const currentUser = getUser();
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await authApi.refreshToken();
        const newToken = res.data.accessToken;

        setUser({ ...currentUser, accessToken: newToken });

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        const retryResponse = await axiosInstance(originalRequest);
        processQueue(null, newToken);
        return retryResponse;
      } catch (refreshError) {
        processQueue(refreshError, null);
        if (currentUser?.accessToken) {
          removeUser();
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
