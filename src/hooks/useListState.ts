import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/redux-hooks";
import { orderActions } from "../store/slices/OrderSlice";
import { useEffect } from "react";

export const useListState = (location: string) => {
  const dispatch = useDispatch();
  const carsCount = useAppSelector((state) => state.data.cars.count);
  // const citiesCount = useAppSelector((state) => state.data.cities.count);
  const ordersCount = useAppSelector((state) => state.order.count);
  let count = 0;
  let onPageChange;
  const setListState = (location: string) => {
    switch (location) {
      case "/admin/orderlist":
        count = ordersCount;
        onPageChange = (page: number, limit: number) =>
          dispatch(orderActions.ordersFetching({ page, limit }));
      case "/admin/carlist":
        count = carsCount;
        onPageChange = (items: Array<any>, page: number, limit: number) =>
          items.slice((page - 1) * limit, limit * page);
      default:
        count = 0;
    }
  };
  useEffect(() => {
    setListState(location);
  }, [location]);
  return [count, onPageChange];
};
