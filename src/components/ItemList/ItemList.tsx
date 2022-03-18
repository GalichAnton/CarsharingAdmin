import React, { useEffect } from "react";
import classes from "./ItemList.module.scss";
import OrderFilterBar from "../Filter/OrderFilterBar/OrderFilterBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/slices/DataSlice";
import { LocalPaths } from "../../Paths/LocalPaths";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import ListHead from "./ListHead/ListHead";

const ItemList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(dataActions.dataFetching());
  }, []);
  useEffect(() => {
    if (error) navigate("/admin/error");
  }, [error]);
  const setTitle = () => {
    if (location.pathname === LocalPaths.orderList) return "Заказы";
    if (location.pathname === LocalPaths.carList) return "Модели";
    if (location.pathname === LocalPaths.cities) return "Города";
    if (location.pathname === LocalPaths.rates) return "Тарифы";
  };
  return (
    <section className={classes.itemsList}>
      <h2 className={classes.title}>{setTitle()}</h2>
      <div className={classes.itemsContainer}>
        <div className={classes.headContainer}>
          <ListHead />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default ItemList;
