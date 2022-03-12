import React, { FC, MouseEvent } from "react";
import cn from "classnames";
import classes from "./Button.module.scss";
interface IButtonProps {
  title: string;
  onClick?: (e: MouseEvent) => void;
  className: string;
  background?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}
const Button: FC<IButtonProps> = (props) => {
  const { title, onClick, className, background, disabled, type, children } =
    props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(classes.button, className)}
      style={{ background: `${background}` }}
    >
      {children} <span>{title}</span>
    </button>
  );
};

export default Button;
