import React, { FC } from "react";
import classes from "./CityItem.module.scss";
import Button from "../../../UI/Button/Button";
import { ChangeButton } from "../../OrderList/OrderItem/ButtonBox/images/ChangeButton";
import { ICity } from "../../../../interfaces/CityInterfaces";
import { CancelButton } from "../../OrderList/OrderItem/ButtonBox/images/CancelButton";
import { useDispatch } from "react-redux";
import { cityActions } from "../../../../store/slices/CitySlice";
interface IOrderItemProps {
  city: ICity;
}
const CityItem: FC<IOrderItemProps> = ({ city }) => {
  const dispatch = useDispatch();
  const handleDelete = (cityId: string) => {
    dispatch(cityActions.startDeleteCity(cityId));
  };
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
        <Button
          onClick={() => handleDelete(city.id)}
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

export default CityItem;
