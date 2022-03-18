import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/ModalSlice";
import authReducer from "./slices/AuthSlice";
import dataReducer from "./slices/DataSlice";
import orderReducer from "./slices/OrderSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/RootSaga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    data: dataReducer,
    order: orderReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
