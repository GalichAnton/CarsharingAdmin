import React, { useEffect, useState } from "react";
import classes from "./ItemList.module.scss";
import OrderItem from "../OrderItem/OrderItem";
import Pagination from "../Pagination/Pagination";
import FilterBar from "../FilterBar/FilterBar";
import { useLocation } from "react-router-dom";
import OrderList from "./OrderList/OrderList";
import CarList from "./CarList/CarList";

const ItemList = () => {
  const location = useLocation();
  return (
    <section className={classes.orderList}>
      <h2 className={classes.title}>Заказы</h2>
      <div className={classes.orderContainer}>
        <div className={classes.filtersContainer}>
          <FilterBar />
        </div>
        {location.pathname === "/admin/orderlist" && <OrderList />}
        {location.pathname === "/admin/carlist" && <CarList />}
      </div>
    </section>
  );
};

export default ItemList;
