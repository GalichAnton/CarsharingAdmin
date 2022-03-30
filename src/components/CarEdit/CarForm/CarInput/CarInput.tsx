import React, { FC, InputHTMLAttributes } from "react";
import classes from "./CarInput.module.scss";
import cn from "classnames";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CarFormValues, carInputsNames } from "../../../../hooks/useCarInputs";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: carInputsNames;
  value?: string;
  label: string;
  type: string;
  register: UseFormRegister<CarFormValues>;
  errors: FieldErrors;
  isValid: boolean;
  placeholder: string;
  defaultValue: string;
}

export const CarInput: FC<IProps> = (props) => {
  const {
    name,
    value,
    label,
    type,
    register,
    errors,
    placeholder,
    defaultValue,
  } = props;
  const { ref, ...inputProps } = register(name);
  const getError = () => {
    if (name === "name" && errors.name) return errors.name.message;
    if (name === "number" && errors.number) return errors.number.message;
    if (name === "tank" && errors.tank) return errors.tank.message;
    if (name === "priceMax" && errors.priceMin) return errors.priceMin.message;
    if (name === "priceMin" && errors.priceMax) return errors.priceMax.message;
    if (name === "description" && errors.description)
      return errors.description.message;
  };
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
        type={type}
        name={name}
        className={cn(classes.input, {
          [classes.inputError]: false,
        })}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <span className={classes.errorMessage}>{getError()}</span>
    </div>
  );
};
