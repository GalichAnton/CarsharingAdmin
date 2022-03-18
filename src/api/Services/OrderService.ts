import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { IParams } from "../../interfaces/ParamsInterface";
import {
  IOrderResponse,
  IOrderStatusResponse,
} from "../../interfaces/OrderInterface";

export default class OrderService {
  static async getOrders(
    params?: IParams
  ): Promise<AxiosResponse<IOrderResponse>> {
    return contentApi.get<IOrderResponse>(ApiPaths.order, {
      params,
    });
  }

  static async getOrderStatuses(): Promise<
    AxiosResponse<IOrderStatusResponse>
  > {
    return contentApi.get<IOrderStatusResponse>(ApiPaths.orderStatuses);
  }
}
