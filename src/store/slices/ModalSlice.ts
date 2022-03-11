import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  isBurgerOpen: boolean;
}

const initialState: IState = {
  isBurgerOpen: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenBurger(state, action: PayloadAction<boolean>) {
      state.isBurgerOpen = action.payload;
    },
  },
});

export const modalActions = ModalSlice.actions;
export default ModalSlice.reducer;
