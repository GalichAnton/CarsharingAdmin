import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IOrder,
  IOrderResponse,
  IOrdersResponse,
  IOrderStatus,
  IOrderStatusResponse,
  NewOrder,
} from "../../interfaces/OrderInterface";
import { IParams } from "../../interfaces/ParamsInterface";
import { NewCarType } from "../../interfaces/CarInterface";

export interface IOrderState {
  status: "idle" | "loading" | "success" | "rejected";
  orderStatuses: {
    data: IOrderStatus[];
    status: "idle" | "loading" | "success" | "rejected";
  };
  selectedOrder: {
    status: "idle" | "loading" | "success" | "rejected";
    data: IOrder;
  };
  orders: IOrder[];
  order: IOrder;
  error: string;
  count: number;
}

const initialState: IOrderState = {
  status: "idle",
  orderStatuses: { data: [], status: "idle" },
  selectedOrder: {
    status: "idle",
    data: {} as IOrder,
  },
  orders: [],
  order: {} as IOrder,
  error: "",
  count: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    ordersFetching(state, action: PayloadAction<IParams>) {
      state.status = "loading";
    },
    ordersFetched(state, action: PayloadAction<IOrdersResponse>) {
      state.status = "success";
      state.orders = action.payload.data;
      state.count = action.payload.count;
    },
    // =====================
    orderStatusesFetching(state) {
      state.status = "loading";
    },
    orderStatusesFetched(state, action: PayloadAction<IOrderStatusResponse>) {
      state.orderStatuses.status = "success";
      state.orderStatuses.data = action.payload.data;
    },
    // =====================
    orderFetching(state, action: PayloadAction<string>) {
      state.selectedOrder.status = "loading";
    },
    // =====================
    startPutOrder(
      state,
      action: PayloadAction<{ orderId: string; order: NewOrder }>
    ) {
      state.selectedOrder.status = "loading";
    },
    endPutOrder(state, action: PayloadAction<IOrderResponse>) {
      state.selectedOrder.status = "success";
      state.selectedOrder.data = {
        ...state.selectedOrder.data,
        ...action.payload.data,
      };
    },
    // =======================
    orderFetched(state, action: PayloadAction<IOrderResponse>) {
      state.selectedOrder.status = "success";
      state.selectedOrder.data = action.payload.data;
    },
    // =====================
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
