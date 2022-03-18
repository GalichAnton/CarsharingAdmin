import React from "react";
import OrderFilterBar from "../../Filter/OrderFilterBar/OrderFilterBar";
import CarFilterBar from "../../Filter/CarFilterBar/CarFilterBar";
import { useLocation } from "react-router-dom";
import { LocalPaths } from "../../../Paths/LocalPaths";
import AddCityForm from "../CitiesList/AddCityForm/AddCityForm";
import AddRateForm from "../RateList/AddRateForm/AddRateForm";

const ListHead = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === LocalPaths.orderList && <OrderFilterBar />}
      {location.pathname === LocalPaths.carList && <CarFilterBar />}
      {location.pathname === LocalPaths.cities && <AddCityForm />}
      {location.pathname === LocalPaths.rates && <AddRateForm />}
    </>
  );
};

export default ListHead;
