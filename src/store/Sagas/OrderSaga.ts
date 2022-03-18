import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import {
  IOrderResponse,
  IOrderStatusResponse,
} from "../../interfaces/OrderInterface";
import { orderActions } from "../slices/OrderSlice";
import OrderService from "../../api/Services/OrderService";

export function* setOrders({
  payload,
}: ReturnType<typeof orderActions.ordersFetching>) {
  try {
    const data: IOrderResponse = yield call(OrderService.getOrders, payload);
    yield put({ type: orderActions.ordersFetched.type, payload: data.data });
  } catch (e: any) {
    yield put({ type: orderActions.setError.type, payload: e.message });
  }
}

export function* setOrderStatuses() {
  try {
    const data: IOrderStatusResponse = yield call(
      OrderService.getOrderStatuses
    );
    yield put({
      type: orderActions.orderStatusesFetched.type,
      payload: data.data,
    });
  } catch (e: any) {
    yield put({ type: orderActions.setError.type, payload: e.message });
  }
}

export function* getOrdersSagaWatcher() {
  yield takeEvery(orderActions.ordersFetching.type, setOrders);
}

export function* orderStatusesSagaWatcher() {
  yield takeEvery(orderActions.orderStatusesFetching.type, setOrderStatuses);
}

export function* ordersSagaWatcher() {
  yield all([fork(getOrdersSagaWatcher), fork(orderStatusesSagaWatcher)]);
}
