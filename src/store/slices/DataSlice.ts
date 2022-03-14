import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../interfaces/DataInterface";

export interface IDataState extends IData {
  status: "idle" | "loading" | "success" | "rejected";
  error: string;
}

const initialState: IDataState = {
  status: "idle",
  cars: { data: [], count: 0 },
  cities: { data: [], count: 0 },
  rates: { data: [], count: 0 },
  category: { data: [], count: 0 },
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataFetching(state) {
      state.status = "loading";
    },
    dataFetched(state, action: PayloadAction<IData>) {
      state.status = "success";
      state.cars.data = action.payload.cars.data;
      state.cars.count = action.payload.cars.count;
      state.cities.data = action.payload.cities.data;
      state.cities.count = action.payload.cities.count;
      state.rates.data = action.payload.rates.data;
      state.category.data = action.payload.category.data;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
