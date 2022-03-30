import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IParams } from "../../interfaces/ParamsInterface";

export interface IFilterState {
  params: IParams;
  currentPage: number;
}

const initialState: IFilterState = {
  params: {} as IParams,
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IParams>) {
      state.params = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    removeFilter(state) {
      state.params = initialState.params;
      state.currentPage = initialState.currentPage;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
