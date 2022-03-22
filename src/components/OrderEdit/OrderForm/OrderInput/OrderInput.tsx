import React, { FC, useEffect } from "react";
import Select, { createFilter } from "react-select";
import classes from "./OrderInput.module.scss";
import { DropdownIndicator } from "../../../Filter/DropDown";
import { FieldErrors } from "react-hook-form";
import { IOption } from "../../../../interfaces/OptionInterface";
import { orderInputsNames } from "../../../../hooks/useOrderInputs";
import { useDispatch } from "react-redux";
import { cityActions } from "../../../../store/slices/CitySlice";
import { useAppSelector } from "../../../../hooks/redux/redux-hooks";

interface IOrderInputProps {
  placeholder: string;
  name: orderInputsNames;
  items: any;
  optionKey: string;
  field: any;
  id: string;
  errors: FieldErrors;
  label: string;
}
const filterConfig: any = {
  ignoreCase: true,
  ignoreAccents: true,
  trim: true,
  matchFrom: "start",
};
const getOptionsByKey =
  (key: string) =>
  (item: Record<string, any>): IOption => ({
    id: item.id,
    value: item?.[key],
    label: item?.[key],
  });
const OrderInput: FC<IOrderInputProps> = (props) => {
  const { placeholder, name, items, optionKey, field, id, errors, label } =
    props;
  const options = items && items.map(getOptionsByKey(optionKey));

  console.log("render");
  const getError = () => {
    if (name === "city" && errors.city) return errors.city.message;
    if (name === "car" && errors.car) return errors.car.message;
    if (name === "tank" && errors.tank) return errors.tank.message;
    if (name === "rate" && errors.rate) return errors.rate.message;
    if (name === "orderStatus" && errors.orderStatus)
      return errors.orderStatus.message;
    if (name === "childChair" && errors.childChair)
      return errors.childChair.message;
    if (name === "color" && errors.color) return errors.color.message;
    if (name === "rightWheel" && errors.rightWheel)
      return errors.rightWheel.message;
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor={name}>
        {label}
      </label>
      <Select
        id={id}
        {...field}
        components={{ DropdownIndicator }}
        className={classes.input}
        classNamePrefix={classes.input}
        name={name}
        options={options}
        placeholder={placeholder}
        noOptionsMessage={() => "Не найдено"}
        filterOption={createFilter(filterConfig)}
      />

      <span className={classes.inputError}>{getError()}</span>
    </div>
  );
};
export default OrderInput;
