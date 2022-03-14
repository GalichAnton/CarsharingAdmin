import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { ICategoryResponse } from "../../interfaces/CarInterface";
export default class CategoryService {
  static async getCategory(): Promise<AxiosResponse<ICategoryResponse>> {
    return contentApi.get<ICategoryResponse>(ApiPaths.category);
  }
}
