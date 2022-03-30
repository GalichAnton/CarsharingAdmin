import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import { IRateResponse } from "../../interfaces/RateInterface";
import RateService from "../../api/Services/RateService";
import { rateActions } from "../slices/RatesSlice";

export function* setRates() {
  try {
    const rates: IRateResponse = yield call(RateService.getRates);
    yield put({
      type: rateActions.endGetRates.type,
      payload: rates.data,
    });
  } catch (e: any) {
    yield put({ type: rateActions.setError.type, payload: e });
  }
}
export function* postRate({
  payload,
}: ReturnType<typeof rateActions.startPostRate>) {
  try {
    yield call(RateService.postRate, payload);
    yield put({ type: rateActions.endPostRate.type });
    yield call(setRates);
  } catch (e: any) {
    yield put({ type: rateActions.setError.type, payload: e });
  }
}
export function* deleteRate({
  payload,
}: ReturnType<typeof rateActions.startDeleteRate>) {
  try {
    yield call(RateService.deleteRate, payload);
    yield put({ type: rateActions.endDeleteRate });
    yield call(setRates);
  } catch (e: any) {
    yield put({ type: rateActions.setError.type, payload: e.message });
  }
}

export function* postRatesSagaWatcher() {
  yield takeEvery(rateActions.startPostRate.type, postRate);
}

export function* deleteRateSagaWatcher() {
  yield takeEvery(rateActions.startDeleteRate.type, deleteRate);
}

export function* getRatesSagaWatcher() {
  yield takeEvery(rateActions.startGetRates.type, setRates);
}

export function* ratesSagaWatcher() {
  yield all([
    fork(getRatesSagaWatcher),
    fork(postRatesSagaWatcher),
    fork(deleteRateSagaWatcher),
  ]);
}
