import React, { FC, useEffect, useState } from "react";
import classes from "./ColorInput.module.scss";
import Button from "../../../UI/Button/Button";
import CheckBoxButton from "../../../UI/Inputs/CheckBoxGroup/CheckBoxButton/CheckBoxButton";
interface IColorInputProps {
  onClick: (color: string) => void;
  colors: string[] | undefined;
  handleDeleteColor: () => void;
}
const ColorInput: FC<IColorInputProps> = (props) => {
  const { onClick, colors, handleDeleteColor } = props;
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    onClick(inputValue);
    setInputValue("");
  };
  useEffect(() => {
    if (inputValue.length < 3) setDisabled(true);
    else setDisabled(false);
  }, [inputValue]);
  return (
    <div className={classes.colorInput}>
      <label className={classes.label}>Цвет</label>
      <div className={classes.container}>
        <input
          className={classes.input}
          type="text"
          placeholder="Цвет"
          name="color"
          id="color"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Button
          onClick={handleClick}
          type="button"
          className={classes.button}
          title={"Добавить"}
          disabled={disabled}
        />
      </div>
      {colors &&
        colors.map((color, index) => (
          <CheckBoxButton
            key={index}
            checkbox={{
              title: color,
              id: index,
              value: color,
              isChecked: true,
            }}
            onChange={handleDeleteColor}
          />
        ))}
    </div>
  );
};
export default ColorInput;
