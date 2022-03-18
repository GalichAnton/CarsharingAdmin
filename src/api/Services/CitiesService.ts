import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { ICityResponse } from "../../interfaces/CityInterfaces";
export default class CitiesService {
  static async getCities(): Promise<AxiosResponse<ICityResponse>> {
    return contentApi.get<ICityResponse>(ApiPaths.cities);
  }

  static async getCityById(
    cityId: string
  ): Promise<AxiosResponse<ICityResponse>> {
    return contentApi.get<ICityResponse>(`${ApiPaths.cities}?cityId=${cityId}`);
  }
}
