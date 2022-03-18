import React, { FC, useRef, MouseEvent } from "react";
import classes from "./FileInput.module.scss";
import Button from "../../../UI/Button/Button";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CarFormValues } from "../CarForm";
interface IFileInputProps {
  name: "image";
  placeholder: string;
  label: string;
  type: string;
  register: UseFormRegister<CarFormValues>;
  errors: FieldErrors;
  id: string;
}
const FileInput: FC<IFileInputProps> = (props) => {
  const { name, label, type, register, errors, placeholder, id } = props;
  const { ref, ...inputProps } = register(name);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef?.current?.click();
  };
  return (
    <div className={classes.container}>
      <label className={classes.inputLabel} htmlFor={name}>
        {label}
      </label>
      <div className={classes.inputContainer}>
        <input
          {...inputProps}
          id={id}
          className={classes.input}
          name={name}
          placeholder={placeholder}
          ref={(e: any) => {
            ref(e);
            inputRef.current = e;
          }}
          autoComplete="off"
          type={type}
        />
        <Button
          onClick={handleClick}
          type="button"
          title="Обзор"
          className={classes.button}
        />
      </div>

      {errors.image && (
        <span className={classes.errorMessage}>{errors.image.message}</span>
      )}
    </div>
  );
};
export default FileInput;
