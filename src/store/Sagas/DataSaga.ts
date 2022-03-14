import { takeEvery, put, call } from "redux-saga/effects";
import { ICarResponse } from "../../interfaces/CarInterface";
import CarService from "../../api/Services/CarService";
import { ICityResponse } from "../../interfaces/CityInterfaces";
import CitiesService from "../../api/Services/CitiesService";
import { dataActions } from "../slices/DataSlice";
import { IData } from "../../interfaces/DataInterface";
import CategoryService from "../../api/Services/CategoryService";
import RateService from "../../api/Services/RateService";
export function* setData() {
  try {
    const cars: ICarResponse = yield call(CarService.getCars);
    const cities: ICityResponse = yield call(CitiesService.getCities);
    const category: ICityResponse = yield call(CategoryService.getCategory);
    const rates: ICityResponse = yield call(RateService.getRates);
    const data: IData = yield {
      cars: cars.data,
      cities: cities.data,
      rates: rates.data,
      category: category.data,
    };
    yield put({ type: dataActions.dataFetched.type, payload: data });
  } catch (e: any) {
    yield put({ type: dataActions.setError.type, payload: e });
  }
}

export function* dataSagaWatcher() {
  yield takeEvery(dataActions.dataFetching.type, setData);
}
