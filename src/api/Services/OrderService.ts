import { AxiosResponse } from "axios";
import { ApiPaths } from "../../Paths/ApiPaths";
import { contentApi } from "../contentApi";
import { IParams } from "../../interfaces/ParamsInterface";
import {
  IOrderResponse,
  IOrdersResponse,
  IOrderStatusResponse,
  NewOrder,
} from "../../interfaces/OrderInterface";
import { ICarResponse, NewCarType } from "../../interfaces/CarInterface";

export default class OrderService {
  static async getOrders(
    params?: IParams
  ): Promise<AxiosResponse<IOrdersResponse>> {
    return contentApi.get<IOrdersResponse>(ApiPaths.order, {
      params,
    });
  }

  static async getOrderById(
    orderId: string
  ): Promise<AxiosResponse<IOrderResponse>> {
    return contentApi.get<IOrderResponse>(`${ApiPaths.order}/${orderId}`);
  }

  static async getOrderStatuses(): Promise<
    AxiosResponse<IOrderStatusResponse>
  > {
    return contentApi.get<IOrderStatusResponse>(ApiPaths.orderStatuses);
  }

  static async putOrder(newOrder: {
    orderId: string;
    order: NewOrder;
  }): Promise<AxiosResponse<IOrderResponse>> {
    return contentApi.put<IOrderResponse>(
      `${ApiPaths.order}/${newOrder.orderId}`,
      {
        ...newOrder.order,
      }
    );
  }
}
