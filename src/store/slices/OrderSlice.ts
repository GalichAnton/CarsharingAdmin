import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, IOrderResponse } from "../../interfaces/OrderInterface";
import { IParams } from "../../interfaces/ParamsInterface";

export interface IOrderState {
  status: "idle" | "loading" | "success" | "rejected";
  orders: IOrder[];
  order: IOrder;
  error: string;
  count: number;
}

const initialState: IOrderState = {
  status: "idle",
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
    orderFetching(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    orderFetched(state, action: PayloadAction<IOrder>) {
      state.status = "success";
      state.order = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
