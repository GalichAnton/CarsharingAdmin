import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import { categoryActions } from "../slices/CategorySlice";
import { ICategoryResponse } from "../../interfaces/CarInterface";
import CategoryService from "../../api/Services/CategoryService";

export function* setCategories() {
  try {
    const categories: ICategoryResponse = yield call(
      CategoryService.getCategory
    );
    yield put({
      type: categoryActions.endGetCategories.type,
      payload: categories.data,
    });
  } catch (e: any) {
    yield put({ type: categoryActions.setError.type, payload: e });
  }
}

export function* getCategoriesSagaWatcher() {
  yield takeEvery(categoryActions.startGetCategories.type, setCategories);
}

export function* categoriesSagaWatcher() {
  yield all([fork(getCategoriesSagaWatcher)]);
}
