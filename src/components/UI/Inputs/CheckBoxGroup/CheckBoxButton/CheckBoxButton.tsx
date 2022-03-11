import React, { FC } from "react";
import { ICheckbox } from "../CheckBoxInterface";
import classes from "./CheckBoxButton.module.scss";
interface ICheckBoxButtonProps {
  checkbox: ICheckbox;
}
const CheckBoxButton: FC<ICheckBoxButtonProps> = ({ checkbox }) => {
  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        className={classes.checkbox}
        name={checkbox.title}
        checked={checkbox.isChecked}
      />
      <label
        key={checkbox.title}
        htmlFor={checkbox.title}
        className={classes.label}
      >
        {checkbox.title}
      </label>
    </div>
  );
};

export default CheckBoxButton;
