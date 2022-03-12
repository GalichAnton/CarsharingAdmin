import axios from "axios";
import { appId, baseUrl, secret } from "./constants";

const authApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-Api-Factory-Application-Id": appId || "",
    "Content-Type": "application/json",
    Authorization: `Basic ${secret}`,
  },
});

export default authApi;
