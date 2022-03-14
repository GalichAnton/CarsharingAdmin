import { loginSagaWatcher } from "./AuthSaga";
import { all, spawn } from "redux-saga/effects";
import { ordersSagaWatcher } from "./OrderSaga";
import { dataSagaWatcher } from "./DataSaga";
export default function* rootSaga() {
  const sagas = [loginSagaWatcher, ordersSagaWatcher, dataSagaWatcher];
  yield all(sagas.map((s) => spawn(s)));
}
