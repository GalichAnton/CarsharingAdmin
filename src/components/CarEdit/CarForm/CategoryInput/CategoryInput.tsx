import React, { FC } from "react";
import Select, { createFilter } from "react-select";
import classes from "./CatergoryInput.module.scss";
import { DropdownIndicator } from "../../../Filter/DropDown";
import { IOption } from "../../../../interfaces/OptionInterface";
import { FieldErrors } from "react-hook-form";

interface ICategoryInputProps {
  placeholder: string;
  name: string;
  items: any;
  optionKey: string;
  field: any;
  id: string;
  errors: FieldErrors;
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
const CategoryInput: FC<ICategoryInputProps> = (props) => {
  const { placeholder, name, items, optionKey, field, id, errors } = props;
  const options = items.map(getOptionsByKey(optionKey));

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor={name}>
        {name}
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
      {errors && errors.category && (
        <span className={classes.inputError}>{errors.category.message}</span>
      )}
    </div>
  );
};
export default CategoryInput;
