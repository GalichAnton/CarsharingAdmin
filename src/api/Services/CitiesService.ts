import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import {
  ICitiesResponse,
  ICityResponse,
} from "../../interfaces/CityInterfaces";
export default class CitiesService {
  static async getCities(): Promise<AxiosResponse<ICitiesResponse>> {
    return contentApi.get<ICitiesResponse>(ApiPaths.cities);
  }

  static async getCityById(
    cityId: string
  ): Promise<AxiosResponse<ICitiesResponse>> {
    return contentApi.get<ICitiesResponse>(
      `${ApiPaths.cities}?cityId=${cityId}`
    );
  }

  static async deleteCity(cityId: string) {
    return contentApi.delete(`${ApiPaths.cities}/${cityId}`);
  }

  static async postCity(city: string): Promise<AxiosResponse<ICityResponse>> {
    return contentApi.post<ICityResponse>(ApiPaths.cities, { name: city });
  }
}
