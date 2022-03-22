import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import { ICitiesResponse } from "../../interfaces/CityInterfaces";
import CitiesService from "../../api/Services/CitiesService";
import { cityActions } from "../slices/CitySlice";
import { carActions } from "../slices/CarSlice";
import { IPointsResponse } from "../../interfaces/PointInterfaces";

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

export function* getPoints({
  payload,
}: ReturnType<typeof cityActions.startGetPoints>) {
  try {
    const { data }: IPointsResponse = yield call(
      CitiesService.getCityPoints,
      payload
    );
    yield put({ type: cityActions.endGetPoints.type, payload: data });
  } catch (e: any) {
    yield put({ type: cityActions.setError.type, payload: e });
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

export function* getCityPointsSagaWatcher() {
  yield takeEvery(cityActions.startGetPoints.type, getPoints);
}

export function* citySagaWatcher() {
  yield all([
    fork(getCitiesSagaWatcher),
    fork(postCitiesSagaWatcher),
    fork(deleteCitySagaWatcher),
    fork(getCityPointsSagaWatcher),
  ]);
}
