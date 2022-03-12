import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/ModalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;