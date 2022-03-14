import React, { useState } from "react";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import CarItem from "../../CarItem/CarItem";
import Preloader from "../../UI/Preloader/Preloader";
import Pagination from "../../Pagination/Pagination";
import classes from "../ItemList.module.scss";
const mapState = (state: RootState) => ({
  cars: state.data.cars.data,
  carsCount: state.data.cars.count,
  dataStatus: state.data.status,
});
const CarList = () => {
  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { carsCount, cars, dataStatus } = useAppSelector(mapState);
  const showedCars = cars.slice((currentPage - 1) * limit, limit * currentPage);
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {dataStatus === "success" ? (
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
