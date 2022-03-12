import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/UserInterfaces";

export interface IAuthState {
  status: "idle" | "loading" | "success" | "rejected";
  user: IUser;
}

const initialState: IAuthState = {
  status: "idle",
  user: {} as IUser,
};

export interface IAuth {
  username: string;
  password: string;
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state, action: PayloadAction<IAuth>) {
      state.status = "loading";
    },
    loginEnd(state, action: PayloadAction<IUser>) {
      state.status = "success";
      state.user = action.payload;
    },
    logOut(state) {
      state = initialState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
