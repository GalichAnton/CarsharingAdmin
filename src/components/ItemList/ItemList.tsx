import React, { useEffect } from "react";
import classes from "./ItemList.module.scss";
import FilterBar from "../FilterBar/FilterBar";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/slices/DataSlice";
import { LocalPaths } from "../../Paths/LocalPaths";

const ItemList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(dataActions.dataFetching());
  }, []);
  const setTitle = () => {
    if (location.pathname === LocalPaths.orderList) return "Заказы";
    if (location.pathname === LocalPaths.carList) return "Модели";
    if (location.pathname === LocalPaths.cities) return "Города";
    if (location.pathname === LocalPaths.rates) return "Тарифы";
  };
  return (
    <section className={classes.orderList}>
      <h2 className={classes.title}>{setTitle()}</h2>
      <div className={classes.orderContainer}>
        <div className={classes.filtersContainer}>
          <FilterBar />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default ItemList;
