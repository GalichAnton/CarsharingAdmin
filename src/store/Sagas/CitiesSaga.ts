import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import {
  ICitiesResponse,
  ICityResponse,
} from "../../interfaces/CityInterfaces";
import CitiesService from "../../api/Services/CitiesService";
import { cityActions } from "../slices/CitySlice";
import { carActions } from "../slices/CarSlice";

export function* setCities() {
  try {
    const cities: ICitiesResponse = yield call(CitiesService.getCities);
    yield put({ type: cityActions.endGetCities.type, payload: cities.data });
  } catch (e: any) {
    yield put({ type: cityActions.setError.type, payload: e });
  }
}

export function* postCity({
  payload,
}: ReturnType<typeof cityActions.startPostCity>) {
  try {
    yield call(CitiesService.postCity, payload);
    yield put({ type: cityActions.endPostCity.type });
    yield call(setCities);
  } catch (e: any) {
    yield put({ type: cityActions.setError.type, payload: e });
  }
}
export function* deleteCity({
  payload,
}: ReturnType<typeof cityActions.startDeleteCity>) {
  try {
    yield call(CitiesService.deleteCity, payload);
    yield put({ type: cityActions.endDeleteCity });
    yield call(setCities);
  } catch (e: any) {
    yield put({ type: carActions.setError.type, payload: e.message });
  }
}

export function* getCitiesSagaWatcher() {
  yield takeEvery(cityActions.startGetCities.type, setCities);
}

export function* postCitiesSagaWatcher() {
  yield takeEvery(cityActions.startPostCity.type, postCity);
}

export function* deleteCitySagaWatcher() {
  yield takeEvery(cityActions.startDeleteCity.type, deleteCity);
}

export function* citySagaWatcher() {
  yield all([
    fork(getCitiesSagaWatcher),
    fork(postCitiesSagaWatcher),
    fork(deleteCitySagaWatcher),
  ]);
}
