import React, { FC } from "react";
import { ICheckbox } from "./CheckBoxInterface";
import CheckBoxButton from "./CheckBoxButton/CheckBoxButton";
interface ICheckBoxGroupProps {
  checkboxes: ICheckbox[];
}

const CheckBoxGroup: FC<ICheckBoxGroupProps> = ({ checkboxes }) => {
  return (
    <form>
      {checkboxes.map((checkbox) => (
        <CheckBoxButton key={checkbox.id} checkbox={checkbox} />
      ))}
    </form>
  );
};

export default CheckBoxGroup;
