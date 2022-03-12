import React, { FC, InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";
import cn from "classnames";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../Login/Login";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: "username" | "password";
  value?: string;
  label: string;
  type: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors;
  isValid: boolean;
}

export const Input: FC<IProps> = (props) => {
  const { name, value, label, type, register, errors } = props;
  const { ref, ...inputProps } = register(name);
  const getError = () => {
    if (name === "username" && errors.username) return errors.username.message;
    if (name === "password" && errors.password) return errors.password.message;
  };
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        {...inputProps}
        autoComplete={"off"}
        ref={ref}
        type={type}
        name={name}
        className={cn(classes.input, {
          [classes.inputError]: false,
        })}
        value={value}
      />
      <span className={classes.errorMessage}>{getError()}</span>
    </div>
  );
};
