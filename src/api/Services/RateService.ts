import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { IRateResponse } from "../../interfaces/RateInterface";
export default class RateService {
  static async getRates(): Promise<AxiosResponse<IRateResponse>> {
    return contentApi.get<IRateResponse>(ApiPaths.rate);
  }
}
