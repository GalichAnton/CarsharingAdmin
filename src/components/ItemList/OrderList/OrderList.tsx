import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem/OrderItem";
import Preloader from "../../UI/Preloader/Preloader";
import { useDispatch } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import classes from "../ItemList.module.scss";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { orderActions } from "../../../store/slices/OrderSlice";
import { filterActions } from "../../../store/slices/FilterSlice";
const mapState = (state: RootState) => ({
  orders: state.order.orders,
  orderStatus: state.order.status,
  ordersCount: state.order.count,
});
const OrderList = () => {
  const limit = 5;
  const dispatch = useDispatch();
  const currentPage = useAppSelector((state) => state.filter.currentPage);
  const { orders, ordersCount, orderStatus } = useAppSelector(mapState);
  const params = useAppSelector((state) => state.filter.params);
  const changePage = (page: number) => {
    dispatch(filterActions.setCurrentPage(page));
  };
  useEffect(() => {
    dispatch(
      orderActions.ordersFetching({
        ...params,
        page: currentPage,
        limit: limit,
      })
    );
  }, [currentPage]);
  useEffect(() => {
    return () => {
      dispatch(filterActions.setCurrentPage(1));
    };
  }, []);
  return (
    <>
      {orderStatus === "success" ? (
        orders.map((order, i) => <OrderItem key={i} order={order} />)
      ) : (
        <Preloader customText={"Подождите..."} />
      )}
      <Pagination
        className={classes.paginationBar}
        currentPage={currentPage}
        totalCount={ordersCount}
        pageSize={limit}
        onPageChange={changePage}
        siblingCount={1}
      />
    </>
  );
};

export default OrderList;
