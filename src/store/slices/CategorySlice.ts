import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, ICategoryResponse } from "../../interfaces/CarInterface";

export interface ICategoryState {
  status: "idle" | "loading" | "success" | "rejected";
  categories: ICategory[];
  selectedCategory: ICategory;
  error: any;
}

const initialState: ICategoryState = {
  status: "idle",
  categories: [],
  selectedCategory: {} as ICategory,
  error: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // =======================
    startGetCategories(state) {
      state.status = "loading";
    },
    endGetCategories(state, action: PayloadAction<ICategoryResponse>) {
      state.status = "success";
      state.categories = action.payload.data;
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

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
