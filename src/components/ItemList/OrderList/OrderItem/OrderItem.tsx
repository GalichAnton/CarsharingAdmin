import React, { FC } from "react";
import classes from "./OrderItem.module.scss";
import { IOrder } from "../../../../interfaces/OrderInterface";
import { dateParser } from "../../../../utils/DateParser";
import CheckBoxGroup from "../../../UI/Inputs/CheckBoxGroup/CheckBoxGroup";
import ButtonsBox from "./ButtonBox/ButtonsBox";
import { setCheckboxes } from "./setCheckboxes";
interface IOrderItemProps {
  order: IOrder;
}
const OrderItem: FC<IOrderItemProps> = ({ order }) => {
  return (
    <div className={classes.order}>
      <div className={classes.info}>
        <div className={classes.imgBox}>
          {order.carId ? (
            <img
              className={classes.img}
              src={order.carId.thumbnail.path}
              alt="car"
            />
          ) : (
            <span>Нет фото</span>
          )}
        </div>
        <div className={classes.descr}>
          <div className={classes.descrItem}>
            <span className={classes.strong}>
              {order.carId ? order.carId.name : "Не известно"}
            </span>{" "}
            в{" "}
            <span className={classes.strong}>
              {order.cityId ? order.cityId.name : "Не известно"}
            </span>
            ,{order.pointId ? order.pointId.address : "Не известно"}{" "}
          </div>
          <div className={classes.descrItem}>
            {order.dateFrom ? dateParser(order.dateFrom) : "Не известно"}
            {" — "}
            {order.dateTo ? dateParser(order.dateTo) : "Не известно"}
          </div>
          <div className={classes.descrItem}>
            Цвет :{" "}
            <span className={classes.strong}>
              {order.color ? order.color : "Не известно"}
            </span>
          </div>
        </div>
        <div className={classes.checkBox}>
          <CheckBoxGroup checkboxes={setCheckboxes(order)} />
        </div>

        <div className={classes.price}>
          {order.price ? order.price : "Не известно"} ₽
        </div>
        <ButtonsBox orderId={order.id} />
      </div>
    </div>
  );
};

export default OrderItem;
