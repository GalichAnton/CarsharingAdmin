import { INavItem } from "./NavItemInterface";
import { edit, list, order } from "./Images";
import { LocalPaths } from "../../../Paths/LocalPaths";

export const navItems: INavItem[] = [
  {
    title: "Заказы",
    route: LocalPaths.orderList,
    image: order,
  },
  {
    title: "Список авто",
    route: LocalPaths.carList,
    image: list,
  },
  {
    title: "Список городов",
    route: LocalPaths.cities,
    image: list,
  },
  {
    title: "Тарифы",
    route: LocalPaths.rates,
    image: list,
  },
  {
    title: "Добавить модель",
    route: "/",
    image: edit,
  },
];
