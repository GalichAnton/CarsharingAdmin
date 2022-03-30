import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDataState {
  status: "idle" | "loading" | "success" | "rejected";
  error: any;
}

const initialState: IDataState = {
  status: "idle",
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataFetching(state) {
      state.status = "loading";
    },
    dataFetched(state) {
      state.status = "success";
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.status = "idle";
    },
    removeError(state) {
      state.error = initialState.error;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
