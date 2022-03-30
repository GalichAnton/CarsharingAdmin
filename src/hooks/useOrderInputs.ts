import { IOption } from "../interfaces/OptionInterface";
import { IOrder } from "../interfaces/OrderInterface";
import { useAppSelector } from "./redux/redux-hooks";
import { IPoint } from "../interfaces/PointInterfaces";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cityActions } from "../store/slices/CitySlice";

export interface OrderFormValues {
  city: IOption;
  point: IPoint;
  car: IOption;
  color: string[];
  rate: IOption;
  orderStatus: IOption;
  tank: string[];
  childChair: string[];
  rightWheel: string[];
}
export type orderInputsNames = keyof OrderFormValues;
export interface orderInput {
  name: orderInputsNames;
  placeholder: string;
  label: string;
  id: string;
  defaultValue: any;
  items: any;
  onChange?: (option: any) => void;
}
export const useOrderInputs = () => {
  const dispatch = useDispatch();
  const order = useAppSelector((state) => state.order.selectedOrder.data);
  const cities = useAppSelector((state) => state.city.cities.data);
  const rates = useAppSelector((state) => state.rate.rates.data);
  const cars = useAppSelector((state) => state.car.cars.data);
  const statuses = useAppSelector((state) => state.order.orderStatuses.data);
  const boleanItem = [
    { name: "Да", id: "1" },
    { name: "Нет", id: "2" },
  ];
  const rateItems = rates.map((rate) => rate.rateTypeId);
  const points = useAppSelector((state) => state.city.points);
  useEffect(() => {
    order.cityId && dispatch(cityActions.startGetPoints(order.cityId.id));
  }, [order]);
  const pointItems = points.map((point) => ({
    name: point.address,
    id: point.id,
  }));
  const setOrderInputValues = (): orderInput[] => {
    const colorItem =
      order &&
      order.carId?.colors.map((color) => ({
        name: color,
        id: order.carId.id,
      }));
    const inputValues: orderInput[] = [
      {
        name: "city",
        placeholder: "Город",
        label: "Город",
        id: "city",
        defaultValue: order.cityId && {
          id: order.id,
          value: order.cityId?.name,
          label: order.cityId?.name,
        },
        items: cities,
      },
      {
        name: "point",
        placeholder: "Пункт",
        label: "Пункт",
        id: "point",
        defaultValue: order.pointId && {
          id: order.id,
          value: order.pointId?.address,
          label: order.pointId?.address,
        },
        items: pointItems,
      },
      {
        name: "car",
        placeholder: "Модель",
        label: "Модель",
        id: "car",
        defaultValue: order.carId && {
          id: order.id,
          value: order.carId?.name,
          label: order.carId?.name,
        },
        items: cars,
      },
      {
        name: "color",
        placeholder: "Цвет",
        label: "Цвет",
        id: "color",
        defaultValue: colorItem
          ? {
              id: colorItem[0].id,
              value: colorItem[0].name,
              label: colorItem[0].name,
            }
          : {
              id: 0,
              value: "Любой",
              label: "Любой",
            },
        items: order && colorItem,
      },
      {
        name: "rate",
        placeholder: "Тариф",
        label: "Тариф",
        id: "rate",
        defaultValue: order.rateId && {
          id: order.rateId?.id,
          value: order.rateId?.rateTypeId?.name,
          label: order.rateId?.rateTypeId?.name,
        },

        items: rateItems,
      },
      {
        name: "orderStatus",
        placeholder: "Статус",
        label: "Статус",
        id: "orderStatus",
        defaultValue: order.orderStatusId && {
          id: order.orderStatusId?.id,
          value: order.orderStatusId?.name,
          label: order.orderStatusId?.name,
        },
        items: statuses,
      },
      {
        name: "tank",
        placeholder: "Полный бак",
        label: "Полный бак",
        id: "tank",
        defaultValue: order && {
          id: order.orderStatusId?.id,
          value: order.isFullTank ? boleanItem[0].name : boleanItem[1].name,
          label: order.isFullTank ? boleanItem[0].name : boleanItem[1].name,
        },
        items: boleanItem,
      },
      {
        name: "childChair",
        placeholder: "Детское кресло",
        label: "Детское кресло",
        id: "childChair",
        defaultValue: order && {
          id: order.orderStatusId?.id,
          value: order.isNeedChildChair
            ? boleanItem[0].name
            : boleanItem[1].name,
          label: order.isNeedChildChair
            ? boleanItem[0].name
            : boleanItem[1].name,
        },
        items: boleanItem,
      },
      {
        name: "rightWheel",
        placeholder: "Правый руль",
        label: "Правый руль",
        id: "description",
        defaultValue: order && {
          id: order.orderStatusId?.id,
          value: order.isRightWheel ? boleanItem[0].name : boleanItem[1].name,
          label: order.isRightWheel ? boleanItem[0].name : boleanItem[1].name,
        },
        items: boleanItem,
      },
    ];
    return inputValues;
  };

  return setOrderInputValues;
};
