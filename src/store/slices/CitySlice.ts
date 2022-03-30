import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICity, ICitiesResponse } from "../../interfaces/CityInterfaces";
import { IPoint, IPointsResponse } from "../../interfaces/PointInterfaces";

export interface ICityState {
  status: "idle" | "loading" | "success" | "rejected";
  cities: { data: ICity[]; count: number };
  points: IPoint[];
  selectedCity: ICity;
  error: any;
}

const initialState: ICityState = {
  status: "idle",
  cities: { data: [], count: 0 },
  points: [],
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
    startGetPoints(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    endGetPoints(state, action: PayloadAction<IPointsResponse>) {
      state.status = "success";
      state.points = action.payload.data;
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
