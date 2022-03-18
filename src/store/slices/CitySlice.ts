import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICity, ICitiesResponse } from "../../interfaces/CityInterfaces";

export interface ICityState {
  status: "idle" | "loading" | "success" | "rejected";
  cities: { data: ICity[]; count: number };
  selectedCity: ICity;
  error: any;
}

const initialState: ICityState = {
  status: "idle",
  cities: { data: [], count: 0 },
  selectedCity: {} as ICity,
  error: "",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    // =======================
    startGetCities(state) {
      state.status = "loading";
    },
    endGetCities(state, action: PayloadAction<ICitiesResponse>) {
      state.status = "success";
      state.cities.data = action.payload.data;
      state.cities.count = action.payload.count;
    },
    // =======================
    startPostCity(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    endPostCity(state) {
      state.status = "success";
    },
    // =======================
    startDeleteCity(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    endDeleteCity(state) {
      state.status = "success";
    },
    // =======================
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.status = "rejected";
    },
    removeError(state) {
      state.error = initialState.error;
    },
  },
});

export const cityActions = citySlice.actions;
export default citySlice.reducer;
