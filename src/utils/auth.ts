import { jwtDecode } from "jwt-decode";
import { store } from "../store/store";
import { createUser } from "../AppSlice";

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

interface User {
  [key: string]: any;
}

export const isTokenExpired = (): boolean => {
  try {
    const user = getUser();
    if (!user.accessToken) return true;
    const decoded = jwtDecode<JwtPayload>(user.accessToken);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const setUser = (user: User): void => {
  store.dispatch(createUser(user));
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : {};
};

export const removeUser = (): void => {
  store.dispatch(createUser({}));
  localStorage.removeItem("user");
};

export const isAuthenticated = (): boolean => {
  const user = getUser();
  if (!user || !user.accessToken) return false;
  return !isTokenExpired();
};
