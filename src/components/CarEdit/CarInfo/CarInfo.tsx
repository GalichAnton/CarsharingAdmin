import React, { FC } from "react";
import classes from "./CarInfo.module.scss";
import { ICar } from "../../../interfaces/CarInterface";
interface ICarInfoProps {
  car: ICar;
}
const CarInfo: FC<ICarInfoProps> = ({ car }) => {
  return (
    <div className={classes.carInfo}>
      <div className={classes.container}>
        <div className={classes.head}>
          <h2 className={classes.title}>Модель</h2>
          <div className={classes.imgBox}>
            {car ? (
              <img
                className={classes.img}
                src={car.thumbnail?.path}
                alt={car.name}
              />
            ) : (
              "Нет фото"
            )}
          </div>
        </div>
        <div className={classes.infoBlock}>
          <ul className={classes.infoList}>
            <li className={classes.infoItem}>
              Модель:<span className={classes.strong}>{car.name}</span>
            </li>
            <li className={classes.infoItem}>
              Номер:<span className={classes.strong}>{car.number}</span>
            </li>
            <li className={classes.infoItem}>
              Категория:
              <span className={classes.strong}>{car.categoryId.name}</span>
            </li>
            <li className={classes.infoItem}>
              Цена от:<span className={classes.strong}>{car.priceMin}</span>
            </li>
            <li className={classes.infoItem}>
              Цена до:<span className={classes.strong}>{car.priceMax}</span>
            </li>
            <li className={classes.infoItem}>
              Топлтво: <span className={classes.strong}>{car.tank}</span>
            </li>
            <li className={classes.infoItem}>
              Описание:{" "}
              <span className={classes.strong}>{car.description}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
