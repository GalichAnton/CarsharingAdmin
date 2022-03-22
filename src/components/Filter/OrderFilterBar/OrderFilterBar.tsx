import React, { useState } from "react";
import Filter from "../Filter";
import Button from "../../UI/Button/Button";
import classes from "../FilterBar.module.scss";
import cn from "classnames";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { ICity } from "../../../interfaces/CityInterfaces";
import { IOption } from "../../../interfaces/OptionInterface";
import { ICar } from "../../../interfaces/CarInterface";
import { IOrderStatus } from "../../../interfaces/OrderInterface";
import { useDispatch } from "react-redux";
import { orderActions } from "../../../store/slices/OrderSlice";
import { filterActions } from "../../../store/slices/FilterSlice";
const OrderFilterBar = () => {
  const dispatch = useDispatch();
  const cities = useAppSelector((state) => state.city.cities.data);
  const cars = useAppSelector((state) => state.car.cars.data);
  const statuses = useAppSelector((state) => state.order.orderStatuses.data);
  const [car, setCar] = useState<ICar>({} as ICar);
  const [city, setCity] = useState<ICity>({} as ICity);
  const [status, setStatus] = useState<IOrderStatus>({} as IOrderStatus);
  const handleChange = (item: IOption) => {
    const selectedCar = cars.find((car) => car.name === item.value)!;
    const selectedCity = cities.find((city) => city.name === item.value)!;
    const selectedStatus = statuses.find(
      (status) => status.name === item.value
    )!;
    selectedCar && setCar(selectedCar);
    selectedCity && setCity(selectedCity);
    selectedStatus && setStatus(selectedStatus);
  };

  const clickHandler = () => {
    const params: Record<string, any> = {
      page: 0,
      limit: 5,
      carId: car ? car.id : undefined,
      cityId: city ? city.id : undefined,
      orderStatusId: status ? status.id : undefined,
    };

    Object.keys(params).forEach((key) => {
      if (params[key] === undefined) {
        delete params[key];
      }
    });
    dispatch(filterActions.setCurrentPage(1));
    dispatch(filterActions.setFilter(params));
    dispatch(orderActions.ordersFetching(params));
  };

  const onReset = () => {
    setCity({} as ICity);
    setCar({} as ICar);
    setStatus({} as IOrderStatus);
    dispatch(filterActions.removeFilter());
    dispatch(orderActions.ordersFetching({ page: 0, limit: 5 }));
  };
  return (
    <div className={classes.filterBar}>
      <div className={classes.filterContainer}>
        <Filter
          optionKey={"name"}
          name="car"
          placeholder="Модель"
          items={cars}
          valueState={car?.name}
          onChange={handleChange}
        />
        <Filter
          optionKey={"name"}
          name="city"
          placeholder="Город"
          items={cities}
          onChange={handleChange}
          valueState={city?.name}
        />
        <Filter
          optionKey={"name"}
          name="status"
          placeholder="Статус"
          items={statuses}
          onChange={handleChange}
          valueState={status?.name}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          type={"button"}
          title="Отмена"
          onClick={onReset}
          className={classes.buttonRed}
        />
        <Button
          type={"button"}
          title="Применить"
          onClick={clickHandler}
          className={cn(classes.button)}
        />
      </div>
    </div>
  );
};

export default OrderFilterBar;
