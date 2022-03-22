import { call, takeEvery, put, all, fork } from "redux-saga/effects";
import {
  IOrderResponse,
  IOrdersResponse,
  IOrderStatusResponse,
} from "../../interfaces/OrderInterface";
import { orderActions } from "../slices/OrderSlice";
import OrderService from "../../api/Services/OrderService";
import { carActions } from "../slices/CarSlice";
import CarService from "../../api/Services/CarService";

export function* setOrders({
  payload,
}: ReturnType<typeof orderActions.ordersFetching>) {
  try {
    const data: IOrdersResponse = yield call(OrderService.getOrders, payload);
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

export function* setSelectedOrder({
  payload,
}: ReturnType<typeof orderActions.orderFetching>) {
  try {
    const data: IOrderResponse = yield call(OrderService.getOrderById, payload);
    yield put({ type: orderActions.orderFetched.type, payload: data.data });
  } catch (e: any) {
    yield put({ type: orderActions.setError.type, payload: e.message });
  }
}

export function* putOrder({
  payload,
}: ReturnType<typeof orderActions.startPutOrder>) {
  try {
    const { data }: IOrderResponse = yield call(OrderService.putOrder, payload);
    yield put({ type: orderActions.endPutOrder.type, payload: data });
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

export function* setOrderSagaWatcher() {
  yield takeEvery(orderActions.orderFetching.type, setSelectedOrder);
}

export function* putOrderSagaWatcher() {
  yield takeEvery(orderActions.startPutOrder.type, putOrder);
}
export function* ordersSagaWatcher() {
  yield all([
    fork(getOrdersSagaWatcher),
    fork(orderStatusesSagaWatcher),
    fork(setOrderSagaWatcher),
    fork(putOrderSagaWatcher),
  ]);
}
