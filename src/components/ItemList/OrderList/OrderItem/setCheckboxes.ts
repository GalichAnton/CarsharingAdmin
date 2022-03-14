import { ICheckbox } from "../../../UI/Inputs/CheckBoxGroup/CheckBoxInterface";
import { IOrder } from "../../../../interfaces/OrderInterface";

export const setCheckboxes = (order: IOrder): ICheckbox[] => {
  const checkBoxes = [
    {
      title: "Полный бак",
      value: "Полный бак",
      id: 1,
      isChecked: order.isFullTank,
    },
    {
      title: "Детское кресло",
      value: "Детское кресло",
      id: 3,
      isChecked: order.isNeedChildChair,
    },
    {
      title: "Правый руль",
      value: "Правый руль",
      id: 2,
      isChecked: order.isRightWheel,
    },
  ];
  return checkBoxes;
};
