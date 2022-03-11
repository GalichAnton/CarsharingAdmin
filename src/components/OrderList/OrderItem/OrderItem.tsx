import React, { FC } from "react";
import classes from "./OrderItem.module.scss";
import { IOrder } from "../../../interfaces/OrderInterface";
import { dateParser } from "../../../utils/DateParser";
import CheckBoxGroup from "../../UI/Inputs/CheckBoxGroup/CheckBoxGroup";
import { ICheckbox } from "../../UI/Inputs/CheckBoxGroup/CheckBoxInterface";
import ButtonsBox from "./ButtonBox/ButtonsBox";
interface IOrderItemProps {
  order: IOrder;
}
const OrderItem: FC<IOrderItemProps> = ({ order }) => {
  const checkboxes: ICheckbox[] = [
    {
      title: "Полный бак",
      value: "Полный бак",
      id: 1,
      isChecked: order.isFullTank,
    },
    {
      title: "Детское кресло",
      value: "Детское кресло",
      id: 3,
      isChecked: order.isNeedChildChair,
    },
    {
      title: "Правый руль",
      value: "Правый руль",
      id: 2,
      isChecked: order.isRightWheel,
    },
  ];
  return (
    <div className={classes.order}>
      <div className={classes.info}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src={order.carId.thumbnail.path}
            alt="car"
          />
        </div>
        <div className={classes.descr}>
          <div className={classes.descrItem}>
            <span className={classes.strong}>{order.carId.name}</span> в{" "}
            <span className={classes.strong}>{order.cityId.name}</span>,
            {order.pointId.address}{" "}
          </div>
          <div className={classes.descrItem}>
            {dateParser(order.dateFrom)}
            {" — "}
            {dateParser(order.dateTo)}
          </div>
          <div className={classes.descrItem}>
            Цвет : <span className={classes.strong}>{order.color}</span>
          </div>
        </div>
        <CheckBoxGroup checkboxes={checkboxes} />
        <div className={classes.price}>{order.price} ₽</div>
        <ButtonsBox />
      </div>
    </div>
  );
};

export default OrderItem;
