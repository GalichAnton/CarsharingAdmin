import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/UserInterfaces";

export interface IAuthState {
  status: "idle" | "loading" | "success" | "rejected";
  user: IUser;
  error: string;
}

const initialState: IAuthState = {
  status: "idle",
  user: {} as IUser,
  error: "",
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
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
