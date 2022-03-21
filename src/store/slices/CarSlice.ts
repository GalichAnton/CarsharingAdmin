import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../interfaces/DataInterface";
import {
  ICar,
  ICarResponse,
  ICarsResponse,
  NewCarType,
} from "../../interfaces/CarInterface";
import { IParams } from "../../interfaces/ParamsInterface";

export interface ICarState {
  status: "idle" | "loading" | "success" | "rejected";
  cars: { data: ICar[]; count: number };
  selectedCar: {
    car: ICar;
    status: "idle" | "loading" | "success" | "rejected";
  };
  error: any;
}

const initialState: ICarState = {
  status: "idle",
  cars: { data: [], count: 0 },
  selectedCar: { car: {} as ICar, status: "idle" },
  error: "",
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    // =======================
    startGetCars(state, action: PayloadAction<IParams>) {
      state.status = "loading";
    },
    endGetCar(state, action: PayloadAction<ICarsResponse>) {
      state.status = "success";
      state.cars.data = action.payload.data;
      state.cars.count = action.payload.count;
    },
    // =======================
    startPostCar(state, action: PayloadAction<NewCarType>) {
      state.selectedCar.status = "loading";
    },
    endPostCar(state) {
      state.selectedCar.status = "success";
    },
    // =======================
    startGetCarById(state, action: PayloadAction<string>) {
      state.selectedCar.status = "loading";
    },
    endGetCarById(state, action: PayloadAction<ICarResponse>) {
      state.selectedCar.status = "success";
      state.selectedCar.car = action.payload.data;
    },
    // =======================
    startPutCar(
      state,
      action: PayloadAction<{ carId: string; car: NewCarType }>
    ) {
      state.selectedCar.status = "loading";
    },
    endPutCar(state, action: PayloadAction<ICarResponse>) {
      state.selectedCar.status = "success";
      state.selectedCar.car = action.payload.data;
    },
    // =======================
    startDeleteCar(state, action: PayloadAction<string>) {
      state.status = "loading";
    },
    endDeleteCar(state) {
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
    removeCar(state) {
      state.selectedCar.car = initialState.selectedCar.car;
      state.selectedCar.status = initialState.selectedCar.status;
    },
  },
});

export const carActions = carSlice.actions;
export default carSlice.reducer;
