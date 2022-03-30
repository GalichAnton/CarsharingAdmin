import React, { FC } from "react";
import classes from "./RateItem.module.scss";
import Button from "../../../UI/Button/Button";
import { IRate } from "../../../../interfaces/RateInterface";
import { CancelButton } from "../../OrderList/OrderItem/ButtonBox/images/CancelButton";
import { useDispatch } from "react-redux";
import { rateActions } from "../../../../store/slices/RatesSlice";
interface IOrderItemProps {
  rate: IRate;
}
const RateItem: FC<IOrderItemProps> = ({ rate }) => {
  const dispatch = useDispatch();
  const handleDelete = (rateId: string) => {
    dispatch(rateActions.startDeleteRate(rateId));
  };
  return (
    <div className={classes.rate}>
      <div className={classes.info}>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Тариф:{" "}
            <span className={classes.strong}>
              {rate.rateTypeId ? rate.rateTypeId.name : "Не известно"}
            </span>
          </li>
        </ul>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Время:{" "}
            <span className={classes.strong}>
              {rate.rateTypeId ? rate.rateTypeId.unit : "Не известно"}
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
        <Button
          onClick={() => handleDelete(rate.id)}
          type={"button"}
          className={classes.button}
          title={"Удалить"}
        >
          <div className={classes.buttonImage}>{CancelButton}</div>
        </Button>
      </div>
    </div>
  );
};

export default RateItem;
