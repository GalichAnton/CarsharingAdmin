import { loginSaga } from "./AuthSaga";
import { all, spawn } from "redux-saga/effects";
export default function* rootSaga() {
  const sagas = [loginSaga];
  yield all(sagas.map((s) => spawn(s)));
}
