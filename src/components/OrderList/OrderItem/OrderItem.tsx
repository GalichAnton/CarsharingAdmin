import React, { FC } from "react";
import classes from "./OrderItem.module.scss";
import { IOrder } from "../../../interfaces/OrderInterface";
import { dateParser } from "../../../utils/DateParser";
import CheckBoxGroup from "../../UI/Inputs/CheckBoxGroup/CheckBoxGroup";
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
        <div className={classes.checkBox}>
          <CheckBoxGroup checkboxes={setCheckboxes(order)} />
        </div>

        <div className={classes.price}>{order.price.toLocaleString()} ₽</div>
        <ButtonsBox />
      </div>
    </div>
  );
};

export default OrderItem;
