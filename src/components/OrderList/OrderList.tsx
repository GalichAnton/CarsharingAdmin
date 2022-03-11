import React from "react";
import classes from "./OrderList.module.scss";
import OrderItem from "./OrderItem/OrderItem";
import { order } from "./OrderItem/constants/OrderExample";
const OrderList = () => {
  return (
    <section className={classes.orderList}>
      <div className={classes.orderContainer}>
        <OrderItem order={order} />
      </div>
    </section>
  );
};

export default OrderList;
