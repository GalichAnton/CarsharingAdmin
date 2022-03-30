import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import {
  ICarResponse,
  ICarsResponse,
  NewCarType,
} from "../../interfaces/CarInterface";
import { IParams } from "../../interfaces/ParamsInterface";
export default class CarService {
  static async getCars(
    params?: IParams
  ): Promise<AxiosResponse<ICarsResponse>> {
    return contentApi.get<ICarsResponse>(ApiPaths.cars, {
      params,
    });
  }
  static async getCarById(carId: string): Promise<AxiosResponse<ICarResponse>> {
    return contentApi.get<ICarResponse>(`${ApiPaths.cars}/${carId}`);
  }
  static async postNewCar(car: NewCarType) {
    return contentApi.post(ApiPaths.cars, { ...car });
  }

  static async putCar(newCar: {
    carId: string;
    car: NewCarType;
  }): Promise<AxiosResponse<ICarResponse>> {
    return contentApi.put<ICarResponse>(`${ApiPaths.cars}/${newCar.carId}`, {
      ...newCar.car,
    });
  }

  static async deleteCar(carId: string) {
    return contentApi.delete(`${ApiPaths.cars}/${carId}`);
  }
}
