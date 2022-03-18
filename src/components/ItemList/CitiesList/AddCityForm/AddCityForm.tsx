import React, { ChangeEvent, useState } from "react";
import Button from "../../../UI/Button/Button";
import cn from "classnames";
import classes from "./addFrom.module.scss";
import { useDispatch } from "react-redux";
import { cityActions } from "../../../../store/slices/CitySlice";

const AddCityForm = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const handleClick = (city: string) => {
    dispatch(cityActions.startPostCity(city));
    setCity("");
  };
  return (
    <div className={classes.addForm}>
      <input
        className={classes.input}
        type={"text"}
        value={city}
        onChange={(e) => handleChange(e)}
      />
      <Button
        type={"button"}
        title="Apply"
        onClick={() => {
          handleClick(city);
        }}
        className={cn(classes.button)}
      />
    </div>
  );
};

export default AddCityForm;
