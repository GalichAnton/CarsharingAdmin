import { appId, baseUrl } from "./constants";
import axios, { AxiosRequestConfig } from "axios";

export const contentApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-Api-Factory-Application-Id": appId || "",
    "Content-Type": "application/json",
  },
});

contentApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = JSON.parse(localStorage.getItem("user")!);
    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
