import { call, takeEvery, put } from "redux-saga/effects";
import { IOrderResponse } from "../../interfaces/OrderInterface";
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

export function* ordersSagaWatcher() {
  yield takeEvery(orderActions.ordersFetching.type, setOrders);
}
