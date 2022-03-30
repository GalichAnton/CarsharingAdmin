import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { IRateResponse, NewRate } from "../../interfaces/RateInterface";
export default class RateService {
  static async getRates(): Promise<AxiosResponse<IRateResponse>> {
    return contentApi.get<IRateResponse>(ApiPaths.rate);
  }
  static async deleteRate(rateId: string) {
    return contentApi.delete(`${ApiPaths.rate}/${rateId}`);
  }

  static async postRate(rate: NewRate) {
    return contentApi.post(ApiPaths.rate, { ...rate });
  }
}
