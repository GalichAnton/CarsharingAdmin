import { takeEvery, put, call, all } from "redux-saga/effects";
import { dataActions } from "../slices/DataSlice";
import { setCars } from "./CarSaga";
import { setCities } from "./CitiesSaga";
import { setCategories } from "./CategorySaga";
import { setRates } from "./RatesSaga";
import { setOrderStatuses } from "./OrderSaga";
import { carActions } from "../slices/CarSlice";

export function* setData() {
  try {
    yield all([
      call(setCars, {
        payload: { page: 0 },
        type: carActions.startGetCars.type,
      }),
      call(setCities),
      call(setCategories),
      call(setOrderStatuses),
      call(setRates),
    ]);
    yield put({ type: dataActions.dataFetched.type });
  } catch (e: any) {
    yield put({ type: dataActions.setError.type, payload: e });
  }
}

export function* dataSagaWatcher() {
  yield takeEvery(dataActions.dataFetching.type, setData);
}
