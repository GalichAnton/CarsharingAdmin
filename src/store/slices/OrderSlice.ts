import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IOrder,
  IOrderResponse,
  IOrderStatus,
  IOrderStatusResponse,
} from "../../interfaces/OrderInterface";
import { IParams } from "../../interfaces/ParamsInterface";

export interface IOrderState {
  status: "idle" | "loading" | "success" | "rejected";
  orderStatuses: {
    data: IOrderStatus[];
    status: "idle" | "loading" | "success" | "rejected";
  };
  orders: IOrder[];
  order: IOrder;
  error: string;
  count: number;
}

const initialState: IOrderState = {
  status: "idle",
  orderStatuses: { data: [], status: "idle" },
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
    ordersFetched(state, action: PayloadAction<IOrderResponse>) {
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

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
