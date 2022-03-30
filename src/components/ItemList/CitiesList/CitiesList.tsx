import React, { useState } from "react";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import Preloader from "../../UI/Preloader/Preloader";
import Pagination from "../../Pagination/Pagination";
import classes from "../ItemList.module.scss";
import CityItem from "./CityItem/CityItem";
const mapState = (state: RootState) => ({
  cities: state.city.cities.data,
  citiesCount: state.city.cities.count,
  citiesStatus: state.city.status,
});

const CitiesList = () => {
  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { citiesCount, cities, citiesStatus } = useAppSelector(mapState);
  const showedCities = cities.slice(
    (currentPage - 1) * limit,
    limit * currentPage
  );
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {citiesStatus === "success" ? (
        showedCities.map((city, i) => <CityItem key={i} city={city} />)
      ) : (
        <Preloader customText={"Подождите..."} />
      )}
      <Pagination
        className={classes.paginationBar}
        currentPage={currentPage}
        totalCount={citiesCount}
        pageSize={limit}
        onPageChange={changePage}
        siblingCount={1}
      />
    </>
  );
};

export default CitiesList;
