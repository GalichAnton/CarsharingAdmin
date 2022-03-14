import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { IParams } from "../../interfaces/ParamsInterface";
import { IOrderResponse } from "../../interfaces/OrderInterface";

export default class OrderService {
  static async getOrders(
    params: IParams
  ): Promise<AxiosResponse<IOrderResponse>> {
    return contentApi.get<IOrderResponse>(ApiPaths.order, {
      params,
    });
  }

  static async getOrderById(
    orderId: string
  ): Promise<AxiosResponse<IOrderResponse>> {
    return contentApi.get<IOrderResponse>(
      `${ApiPaths.order}?orderId=${orderId}`
    );
  }
}
