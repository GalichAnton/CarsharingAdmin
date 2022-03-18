import React, { useEffect } from "react";
import CarInfo from "../../../components/CarEdit/CarInfo/CarInfo";
import CarForm from "../../../components/CarEdit/CarForm/CarForm";
import classes from "./CarPage.module.scss";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useDispatch } from "react-redux";
import { carActions } from "../../../store/slices/CarSlice";
import { useInputs } from "../../../hooks/useInputs";
import Preloader from "../../../components/UI/Preloader/Preloader";
const CarPage = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const setInputs = useInputs();
  const car = useAppSelector((state) => state.car.selectedCar.car);
  const status = useAppSelector((state) => state.car.selectedCar.status);
  const carInputs = setInputs(car);
  useEffect(() => {
    carId && dispatch(carActions.startGetCarById(carId));
  }, [carId]);
  useEffect(() => {
    return () => {
      dispatch(carActions.removeCar());
    };
  }, []);
  if (carId && status === "success") {
    return (
      <div className={classes.carPage}>
        <CarInfo car={car} />

        <CarForm car={car} inputs={carInputs} />
      </div>
    );
  } else if (carId) {
    return <Preloader customText={"Подождите"} />;
  } else
    return (
      <div className={classes.carPage}>
        <CarForm car={car} inputs={carInputs} />
      </div>
    );
};

export default CarPage;
