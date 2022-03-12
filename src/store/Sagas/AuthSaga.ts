import { call, takeEvery, put } from "redux-saga/effects";
import AuthService from "../../api/Services/AuthService";
import { IUserResponse } from "../../interfaces/UserInterfaces";
import { authActions } from "../slices/AuthSlice";
export function* login({ payload }: ReturnType<typeof authActions.loginStart>) {
  const { data }: IUserResponse = yield call(
    AuthService.login,
    payload.username,
    payload.password
  );
  yield put({ type: authActions.loginEnd.type, payload: data });
  yield localStorage.setItem("access_token", data.access_token);
}

export function* loginSaga() {
  yield takeEvery(authActions.loginStart.type, login);
}
