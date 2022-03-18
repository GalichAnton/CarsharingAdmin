import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import { carActions } from "../slices/CarSlice";
import CarService from "../../api/Services/CarService";
import { ICarsResponse } from "../../interfaces/CarInterface";

export function* setCars({
  payload,
}: ReturnType<typeof carActions.startGetCars>) {
  try {
    const cars: ICarsResponse = yield call(CarService.getCars, payload);
    yield put({ type: carActions.endGetCar.type, payload: cars.data });
  } catch (e: any) {
    yield put({ type: carActions.setError.type, payload: e });
  }
}

export function* postCar({
  payload,
}: ReturnType<typeof carActions.startPostCar>) {
  try {
    yield call(CarService.postNewCar, payload);
    yield call(carActions.endPostCar);
  } catch (e: any) {
    yield put({ type: carActions.setError.type, payload: e.message });
  }
}

export function* getCar({
  payload,
}: ReturnType<typeof carActions.startGetCarById>) {
  try {
    const { data } = yield call(CarService.getCarById, payload);
    yield put({ type: carActions.endGetCarById.type, payload: data });
  } catch (e: any) {
    yield put({ type: carActions.setError.type, payload: e.message });
  }
}

export function* putCar({
  payload,
}: ReturnType<typeof carActions.startPutCar>) {
  try {
    const { data } = yield call(CarService.putCar, payload);
    yield put({ type: carActions.endGetCarById.type, payload: data });
  } catch (e: any) {
    yield put({ type: carActions.setError.type, payload: e.message });
  }
}

export function* deleteCar({
  payload,
}: ReturnType<typeof carActions.startDeleteCar>) {
  try {
    yield call(CarService.deleteCar, payload);
    yield call(carActions.endDeleteCar);
    yield call(setCars, {
      payload: { page: 0 },
      type: carActions.startGetCars.type,
    });
  } catch (e: any) {
    yield put({ type: carActions.setError.type, payload: e.message });
  }
}
export function* setCarSagaWatcher() {
  yield takeEvery(carActions.startGetCars.type, setCars);
}

export function* postCarSagaWatcher() {
  yield takeEvery(carActions.startPostCar.type, postCar);
}

export function* getCarSagaWatcher() {
  yield takeEvery(carActions.startGetCarById.type, getCar);
}
export function* putCarSagaWatcher() {
  yield takeEvery(carActions.startPutCar.type, putCar);
}

export function* deleteCarSagaWatcher() {
  yield takeEvery(carActions.startDeleteCar.type, deleteCar);
}
export function* carSagaWatcher() {
  yield all([
    fork(setCarSagaWatcher),
    fork(postCarSagaWatcher),
    fork(getCarSagaWatcher),
    fork(putCarSagaWatcher),
    fork(deleteCarSagaWatcher),
  ]);
}
