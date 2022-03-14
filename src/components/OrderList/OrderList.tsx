import React, { useState } from "react";
import classes from "./OrderList.module.scss";
import OrderItem from "./OrderItem/OrderItem";
import { orders } from "./OrderItem/constants/OrderExample";
import Pagination from "../Pagination/Pagination";
import FilterBar from "../FilterBar/FilterBar";
const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className={classes.orderList}>
      <h2 className={classes.title}>Заказы</h2>
      <div className={classes.orderContainer}>
        <div className={classes.filtersContainer}>
          <FilterBar />
        </div>

        {orders.map((order, i) => (
          <OrderItem key={i} order={order} />
        ))}

        <Pagination
          className={classes.paginationBar}
          currentPage={currentPage}
          totalCount={155}
          pageSize={5}
          onPageChange={changePage}
          siblingCount={1}
        />
      </div>
    </section>
  );
};

export default OrderList;
