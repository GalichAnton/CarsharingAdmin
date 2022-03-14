import React, { FC } from "react";
import classes from "./CarItem.module.scss";
import { ICar } from "../../../../interfaces/CarInterface";
import Button from "../../../UI/Button/Button";
import { ChangeButton } from "../../OrderList/OrderItem/ButtonBox/images/ChangeButton";
interface IOrderItemProps {
  car: ICar;
}
const CarItem: FC<IOrderItemProps> = ({ car }) => {
  return (
    <div className={classes.car}>
      <div className={classes.info}>
        <div className={classes.imgBox}>
          {car ? (
            <img className={classes.img} src={car.thumbnail.path} alt="car" />
          ) : (
            <span>Нет фото</span>
          )}
        </div>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Модель{" "}
            <span className={classes.strong}>
              {car ? car.name : "Не известно"}
            </span>
          </li>
          <li className={classes.descrItem}>
            Цена от:
            <span className={classes.strong}>{car.priceMin}</span>
          </li>
          <li className={classes.descrItem}>
            Цена до:
            <span className={classes.strong}>{car.priceMax}</span>
          </li>
        </ul>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Топливо:{" "}
            <span className={classes.strong}>
              {car.tank ? car.tank : "Не известно"}
            </span>
          </li>
          <li className={classes.descrItem}>
            Номер:
            <span className={classes.strong}>{car.number}</span>
          </li>
          <li className={classes.descrItem}>
            Категория:
            <span className={classes.strong}>{car.categoryId.name}</span>
          </li>
        </ul>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Описание:{" "}
            <span className={classes.strong}>
              {car ? car.description : "Не известно"}
            </span>
          </li>
        </ul>
        <Button type={"button"} className={classes.button} title={"Изменить"}>
          <div className={classes.buttonImage}>{ChangeButton}</div>
        </Button>
      </div>
    </div>
  );
};

export default CarItem;
