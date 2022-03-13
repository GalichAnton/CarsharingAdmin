import { call, takeEvery, put } from "redux-saga/effects";
import AuthService from "../../api/Services/AuthService";
import { IUserResponse } from "../../interfaces/UserInterfaces";
import { authActions } from "../slices/AuthSlice";
export function* loginSaga({
  payload,
}: ReturnType<typeof authActions.loginStart>) {
  try {
    const { data }: IUserResponse = yield call(
      AuthService.login,
      payload.username,
      payload.password
    );
    yield put({ type: authActions.loginEnd.type, payload: data });
    yield localStorage.setItem("access_token", data.access_token);
  } catch (e: any) {
    yield put({ type: authActions.setError.type, payload: e.response.data });
  }
}

export function* loginSagaWatcher() {
  yield takeEvery(authActions.loginStart.type, loginSaga);
}
