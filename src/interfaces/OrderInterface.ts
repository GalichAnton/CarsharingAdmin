import { ICar } from "./CarInterface";
import { IRate } from "./RateInterface";

export interface IOrderItem {
  title: string;
  info: string | undefined;
}
export interface IOrder {
  orderStatusId: {
    name: string;
    id: string;
  };
  cityId: {
    name: string;
    id: string;
  };
  pointId: {
    address: string;
    id: string;
    name: string;
  };
  carId: ICar;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: IRate;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  id: string;
}

export interface IOrderResponse {
  data: IOrder[];
  count: number;
}
export interface IOrderStatus {
  name: string;
  id: string;
}

export interface IOrderStatusResponse {
  data: IOrderStatus[];
}
