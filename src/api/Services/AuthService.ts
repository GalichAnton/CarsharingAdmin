import { AxiosResponse } from "axios";
import authApi from "../authApi";
import { ApiPaths } from "../../Paths/ApiPaths";
import { IUserResponse } from "../../interfaces/UserInterfaces";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<IUserResponse>> {
    return authApi.post<IUserResponse>(ApiPaths.auth, {
      username,
      password,
    });
  }
  static async register(username: string, password: string) {
    return authApi.post(ApiPaths.register, {
      username,
      password,
    });
  }
}
