import React, { FC } from "react";
import Select, { createFilter } from "react-select";
import classes from "./Filter.module.scss";
import { IOption } from "../../interfaces/OptionInterface";
import { DropdownIndicator } from "./DropDown";
interface IFilterProps {
  onChange?: (item: IOption) => void;
  valueState: string;
  placeholder: string;
  name: string;
  items: any;
  optionKey: string;
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

const Filter: FC<IFilterProps> = (props) => {
  const { onChange, valueState, placeholder, name, items, optionKey } = props;
  const options = items.map(getOptionsByKey(optionKey));
  return (
    <div className={classes.inputContainer}>
      <Select
        components={{ DropdownIndicator }}
        className={classes.input}
        classNamePrefix={classes.input}
        name={name}
        value={
          valueState
            ? options.filter((option: IOption) => option.value === valueState)
            : null
        }
        options={options}
        isSearchable={true}
        placeholder={placeholder}
        noOptionsMessage={() => "Не найдено"}
        filterOption={createFilter(filterConfig)}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
