import { authSaga } from "./AuthSaga";
import { all, spawn } from "redux-saga/effects";
import { ordersSagaWatcher } from "./OrderSaga";
import { dataSagaWatcher } from "./DataSaga";
import { carSagaWatcher } from "./CarSaga";
import { citySagaWatcher } from "./CitiesSaga";
import { categoriesSagaWatcher } from "./CategorySaga";
import { ratesSagaWatcher } from "./RatesSaga";
export default function* rootSaga() {
  const sagas = [
    authSaga,
    ordersSagaWatcher,
    dataSagaWatcher,
    carSagaWatcher,
    citySagaWatcher,
    categoriesSagaWatcher,
    ratesSagaWatcher,
  ];
  yield all(sagas.map((s) => spawn(s)));
}
