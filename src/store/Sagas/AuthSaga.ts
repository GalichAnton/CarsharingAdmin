import { call, takeEvery, put, all, fork } from "redux-saga/effects";
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

export function* registerSaga({
  payload,
}: ReturnType<typeof authActions.loginStart>) {
  try {
    const { data }: IUserResponse = yield call(
      AuthService.register,
      payload.username,
      payload.password
    );
    yield put({ type: authActions.registerEnd.type, payload: data });
  } catch (e: any) {
    yield put({ type: authActions.setError.type, payload: e.message });
  }
}

export function* loginSagaWatcher() {
  yield takeEvery(authActions.loginStart.type, loginSaga);
}

export function* registerSagaWatcher() {
  yield takeEvery(authActions.registerStart.type, registerSaga);
}

export function* authSaga() {
  yield all([fork(loginSagaWatcher), fork(registerSagaWatcher)]);
}
