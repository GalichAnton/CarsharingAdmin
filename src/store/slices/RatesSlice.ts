import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRate, IRateResponse, NewRate } from "../../interfaces/RateInterface";

export interface IRateState {
  status: "idle" | "loading" | "success" | "rejected";
  rates: { data: IRate[]; count: number };
  selectedRate: IRate;
  error: any;
}

const initialState: IRateState = {
  status: "idle",
  rates: { data: [], count: 0 },
  selectedRate: {} as IRate,
  error: "",
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    // =======================
    startGetRates(state) {
      state.status = "loading";
    },
    endGetRates(state, action: PayloadAction<IRateResponse>) {
      state.status = "success";
      state.rates.data = action.payload.data;
      state.rates.count = action.payload.count;
    },
    // =======================
    startPostRate(state, action: PayloadAction<NewRate>) {
      state.status = "loading";
    },
    endPostRate(state) {
      state.status = "success";
    },
    // =======================
    startDeleteRate(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    endDeleteRate(state) {
      state.status = "success";
    },
    // =======================
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.status = "idle";
    },
    removeError(state) {
      state.error = initialState.error;
    },
  },
});

export const rateActions = rateSlice.actions;
export default rateSlice.reducer;
