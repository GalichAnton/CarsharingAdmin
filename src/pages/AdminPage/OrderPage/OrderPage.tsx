import React, { useEffect } from "react";
import classes from "./OrderPage.module.scss";
import OrderForm from "../../../components/OrderEdit/OrderForm/OrderForm";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useOrderInputs } from "../../../hooks/useOrderInputs";
import Preloader from "../../../components/UI/Preloader/Preloader";
import { orderActions } from "../../../store/slices/OrderSlice";
import OrderInfo from "../../../components/OrderEdit/OrderInfo/OrderInfo";
const OrderPage = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const order = useAppSelector((state) => state.order.selectedOrder.data);
  const status = useAppSelector((state) => state.order.selectedOrder.status);
  const setInputs = useOrderInputs();
  const orderInputs = setInputs();
  useEffect(() => {
    orderId && dispatch(orderActions.orderFetching(orderId));
  }, [orderId]);
  if (orderId && status === "success") {
    return (
      <div className={classes.orderPage}>
        <OrderInfo order={order} />

        <OrderForm order={order} inputs={orderInputs} />
      </div>
    );
  } else if (orderId) {
    return <Preloader customText={"Подождите"} />;
  }
};

export default OrderPage;
