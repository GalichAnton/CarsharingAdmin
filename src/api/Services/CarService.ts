import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { ICarResponse } from "../../interfaces/CarInterface";
import { IParams } from "../../interfaces/ParamsInterface";
export default class CarService {
  static async getCars(params?: IParams): Promise<AxiosResponse<ICarResponse>> {
    return contentApi.get<ICarResponse>(ApiPaths.cars, {
      params,
    });
  }

  static async getCarById(carId: string): Promise<AxiosResponse<ICarResponse>> {
    return contentApi.get<ICarResponse>(`${ApiPaths.cars}?carId=${carId}`);
  }
}
