import { ICar } from "../interfaces/CarInterface";
import { IOption } from "../interfaces/OptionInterface";

export interface CarFormValues {
  name: string;
  number: string;
  tank: string;
  priceMin: string;
  priceMax: string;
  description: string;
  category: IOption;
  image: FileList;
}
export type carInputsNames = keyof CarFormValues;
export interface carInput {
  name: carInputsNames;
  placeholder: string;
  label: string;
  id: string;
  type: string;
  defaultValue: string;
}
export const useCarInputs = () => {
  const setCarInputValues = (car: ICar): carInput[] => {
    const inputValues: carInput[] = [
      {
        name: "name",
        placeholder: "Модель",
        label: "Модель",
        id: "name",
        type: "text",
        defaultValue: car ? car.name : "",
      },
      {
        name: "number",
        placeholder: "Номер",
        label: "Номер",
        id: "number",
        type: "text",
        defaultValue: car ? car.number : "",
      },
      {
        name: "tank",
        placeholder: "Топливо",
        label: "Топливо",
        id: "tank",
        type: "text",
        defaultValue: car.tank ? String(car.tank) : "",
      },
      {
        name: "priceMin",
        placeholder: "Цена от",
        label: "Цена от",
        id: "priceMin",
        type: "text",
        defaultValue: car.priceMin ? String(car.priceMin) : "",
      },
      {
        name: "priceMax",
        placeholder: "Цена до",
        label: "Цена до",
        id: "priceMax",
        type: "text",
        defaultValue: car.priceMax ? String(car.priceMax) : "",
      },
      {
        name: "description",
        placeholder: "Описание",
        label: "Описание",
        id: "description",
        type: "textarea",
        defaultValue: car ? car.description : "",
      },
    ];
    return inputValues;
  };

  return setCarInputValues;
};
