import React, { ChangeEvent, useState } from "react";
import Button from "../../../UI/Button/Button";
import cn from "classnames";
import classes from "./AddRateFrom.module.scss";
import { useDispatch } from "react-redux";
import { rateActions } from "../../../../store/slices/RatesSlice";

const AddRateForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: "",
    unit: "",
    price: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.currentTarget.name]: e.currentTarget.value });
  };
  const handleClick = () => {
    dispatch(
      rateActions.startPostRate({
        price: Number(value.price),
        rateTypeId: {
          name: value.name,
          unit: value.unit,
        },
      })
    );
  };
  return (
    <div className={classes.addForm}>
      <input
        name={"name"}
        className={classes.input}
        type={"text"}
        value={value.name}
        placeholder={"Название"}
        onChange={(e) => handleChange(e)}
      />
      <input
        name={"unit"}
        className={classes.input}
        type={"text"}
        value={value.unit}
        onChange={(e) => handleChange(e)}
        placeholder={"Тип"}
      />
      <input
        name={"price"}
        className={classes.input}
        type={"text"}
        value={value.price}
        placeholder={"Стоимость"}
        onChange={(e) => handleChange(e)}
      />
      <Button
        type={"button"}
        title="Apply"
        onClick={handleClick}
        className={cn(classes.button)}
      />
    </div>
  );
};

export default AddRateForm;
