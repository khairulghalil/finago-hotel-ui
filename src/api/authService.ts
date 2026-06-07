import axiosInstance from "./axios";
import type { signinValidation } from "../features/auth/types";
import { getUser } from "../utils/auth";

export const authApi = {
  signIn: async (params: signinValidation) => {
    const response = await axiosInstance.post("/auth/signin", params);
    return response.data;
  },

  refreshToken: async () => {
    const savedUser = getUser();
    if (!savedUser.accessToken) {
      throw new Error("No user found");
    }
    const response = await axiosInstance.post("/auth/refreshToken");
    return response.data;
  },

  me: async () => {
    const response = await axiosInstance.post("/auth/me");
    return response.data;
  },
};
