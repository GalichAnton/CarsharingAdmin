import React, { useState } from "react";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import RateItem from "./RateItem/RateItem";
import Preloader from "../../UI/Preloader/Preloader";
import Pagination from "../../Pagination/Pagination";
import classes from "../ItemList.module.scss";
const mapState = (state: RootState) => ({
  rates: state.rate.rates.data,
  ratesCount: state.rate.rates.count,
  rateStatus: state.rate.status,
});
const RateList = () => {
  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { ratesCount, rates, rateStatus } = useAppSelector(mapState);
  const showedRates = rates.slice(
    (currentPage - 1) * limit,
    limit * currentPage
  );
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {rateStatus === "success" ? (
        showedRates.map((rate, i) => <RateItem key={i} rate={rate} />)
      ) : (
        <Preloader customText={"Подождите..."} />
      )}
      <Pagination
        className={classes.paginationBar}
        currentPage={currentPage}
        totalCount={ratesCount}
        pageSize={limit}
        onPageChange={changePage}
        siblingCount={1}
      />
    </>
  );
};

export default RateList;
