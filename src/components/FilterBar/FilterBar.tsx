import React from "react";
import Filter from "./Filter/Filter";
import Button from "../UI/Button/Button";
import classes from "./FilterBar.module.scss";
import cn from "classnames";
import { cities } from "./constants/cities";
import { cars } from "./constants/cars";
const FilterBar = () => {
  return (
    <div className={classes.filterBar}>
      <div className={classes.filterContainer}>
        <Filter
          optionKey={"name"}
          name="car"
          placeholder="Модель"
          items={cars}
          onChange={() => {
            console.log("change");
          }}
          valueState={""}
        />
        <Filter
          optionKey={"name"}
          name="city"
          placeholder="Город"
          items={cities}
          onChange={() => {
            console.log("change");
          }}
          valueState={""}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          type={"button"}
          title="Reset"
          onClick={() => {
            console.log("click");
          }}
          className={classes.buttonRed}
        />
        <Button
          type={"button"}
          title="Apply"
          onClick={() => {
            console.log("click");
          }}
          className={cn(classes.button)}
        />
      </div>
    </div>
  );
};

export default FilterBar;
