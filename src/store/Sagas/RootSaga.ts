import { loginSagaWatcher } from "./AuthSaga";
import { all, spawn } from "redux-saga/effects";
export default function* rootSaga() {
  const sagas = [loginSagaWatcher];
  yield all(sagas.map((s) => spawn(s)));
}
