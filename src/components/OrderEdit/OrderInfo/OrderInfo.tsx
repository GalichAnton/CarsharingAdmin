import React, { FC } from "react";
import classes from "./OrderInfo.module.scss";
import { IOrder } from "../../../interfaces/OrderInterface";
import { dateCalc } from "../../../utils/DateCalc";
interface ICarInfoProps {
  order: IOrder;
}
const OrderInfo: FC<ICarInfoProps> = ({ order }) => {
  return (
    <div className={classes.orderInfo}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2 className={classes.title}>{`Заказ №${order.id}`}</h2>
          <div className={classes.imgBox}>
            {order.carId ? (
              <img
                className={classes.img}
                src={order.carId.thumbnail?.path}
                alt={order.carId.name}
              />
            ) : (
              "Нет фото"
            )}
          </div>
        </div>
        <div className={classes.infoBlock}>
          <ul className={classes.infoList}>
            <li className={classes.infoItem}>
              Город:
              <span className={classes.strong}>
                {order.cityId ? order.cityId.name : "Не известно"}
              </span>
            </li>
            <li className={classes.infoItem}>
              Адрес:
              <span className={classes.strong}>
                {order.pointId ? order.pointId.address : "Не известно"}
              </span>
            </li>
            <li className={classes.infoItem}>
              Модель:
              <span className={classes.strong}>{order.carId?.name}</span>
            </li>
            <li className={classes.infoItem}>
              Цвет:<span className={classes.strong}>{order.color}</span>
            </li>
            <li className={classes.infoItem}>
              Статус:
              <span className={classes.strong}>
                {order.orderStatusId?.name}
              </span>
            </li>
            <li className={classes.infoItem}>
              Цена: <span className={classes.strong}>{order.price}</span>
            </li>
            <li className={classes.infoItem}>
              Срок:{" "}
              <span className={classes.strong}>
                {dateCalc(order.dateFrom, order.dateTo)}
              </span>
            </li>
            <li className={classes.infoItem}>
              Полный бак:{" "}
              <span className={classes.strong}>
                {order.isFullTank ? "Да" : "Нет"}
              </span>
            </li>
            <li className={classes.infoItem}>
              Детское кресло:{" "}
              <span className={classes.strong}>
                {order.isNeedChildChair ? "Да" : "Нет"}
              </span>
            </li>
            <li className={classes.infoItem}>
              Правый руль:{" "}
              <span className={classes.strong}>
                {order.isRightWheel ? "Да" : "Нет"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
