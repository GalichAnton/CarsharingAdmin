import React, { useEffect, useState } from "react";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import CarItem from "./CarItem/CarItem";
import Preloader from "../../UI/Preloader/Preloader";
import Pagination from "../../Pagination/Pagination";
import classes from "../ItemList.module.scss";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store/slices/FilterSlice";
const mapState = (state: RootState) => ({
  cars: state.car.cars.data,
  carsCount: state.car.cars.count,
  carStatus: state.car.status,
});
const CarList = () => {
  const limit = 5;
  const dispatch = useDispatch();
  const currentPage = useAppSelector((state) => state.filter.currentPage);
  const { carsCount, cars, carStatus } = useAppSelector(mapState);
  const showedCars = cars.slice((currentPage - 1) * limit, limit * currentPage);
  const changePage = (page: number) => {
    dispatch(filterActions.setCurrentPage(page));
  };
  useEffect(() => {
    return () => {
      dispatch(filterActions.setCurrentPage(1));
    };
  }, []);
  return (
    <>
      {carStatus === "success" ? (
        showedCars.map((car, i) => <CarItem key={i} car={car} />)
      ) : (
        <Preloader customText={"Подождите..."} />
      )}
      <Pagination
        className={classes.paginationBar}
        currentPage={currentPage}
        totalCount={carsCount}
        pageSize={limit}
        onPageChange={changePage}
        siblingCount={1}
      />
    </>
  );
};

export default CarList;
