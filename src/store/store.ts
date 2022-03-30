import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/ModalSlice";
import authReducer from "./slices/AuthSlice";
import dataReducer from "./slices/DataSlice";
import orderReducer from "./slices/OrderSlice";
import carReducer from "./slices/CarSlice";
import cityReducer from "./slices/CitySlice";
import categoryReducer from "./slices/CategorySlice";
import rateReducer from "./slices/RatesSlice";
import filterReducer from "./slices/FilterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/RootSaga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    data: dataReducer,
    order: orderReducer,
    car: carReducer,
    rate: rateReducer,
    category: categoryReducer,
    city: cityReducer,
    filter: filterReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
