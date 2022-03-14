import React, { FC } from "react";
import classes from "./RateItem.module.scss";
import { ICar } from "../../../../interfaces/CarInterface";
import Button from "../../../UI/Button/Button";
import { ChangeButton } from "../../OrderList/OrderItem/ButtonBox/images/ChangeButton";
import { IRate } from "../../../../interfaces/RateInterface";
import { CancelButton } from "../../OrderList/OrderItem/ButtonBox/images/CancelButton";
interface IOrderItemProps {
  rate: IRate;
}
const RateItem: FC<IOrderItemProps> = ({ rate }) => {
  console.log(rate);
  return (
    <div className={classes.rate}>
      <div className={classes.info}>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Тариф:{" "}
            <span className={classes.strong}>
              {rate ? rate.rateTypeId.name : "Не известно"}
            </span>
          </li>
        </ul>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Время:{" "}
            <span className={classes.strong}>
              {rate ? rate.rateTypeId.unit : "Не известно"}
            </span>
          </li>
        </ul>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Цена:{" "}
            <span className={classes.strong}>
              {rate ? rate.price : "Не известно"}
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

export default RateItem;
