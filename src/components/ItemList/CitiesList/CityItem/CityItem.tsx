import React, { FC } from "react";
import classes from "./CityItem.module.scss";
import Button from "../../../UI/Button/Button";
import { ChangeButton } from "../../OrderList/OrderItem/ButtonBox/images/ChangeButton";
import { ICity } from "../../../../interfaces/CityInterfaces";
import { CancelButton } from "../../OrderList/OrderItem/ButtonBox/images/CancelButton";
interface IOrderItemProps {
  city: ICity;
}
const CityItem: FC<IOrderItemProps> = ({ city }) => {
  return (
    <div className={classes.city}>
      <div className={classes.info}>
        <ul className={classes.descrBlock}>
          <li className={classes.descrItem}>
            Город{" "}
            <span className={classes.strong}>
              {city ? city.name : "Не известно"}
            </span>
          </li>
        </ul>
        <div className={classes.buttonBox}>
          <Button type={"button"} className={classes.button} title={"Изменить"}>
            <div className={classes.buttonImage}>{ChangeButton}</div>
          </Button>
          <Button type={"button"} className={classes.button} title={"Удалить"}>
            <div className={classes.buttonImage}>{CancelButton}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CityItem;
