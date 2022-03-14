import { INavItem } from "./NavItemInterface";
import { edit, list, order } from "./Images";

export const navItems: INavItem[] = [
  {
    title: "Заказы",
    route: "/admin/orderlist",
    image: order,
  },
  {
    title: "Список авто",
    route: "/admin/carlist",
    image: list,
  },
  {
    title: "Список городов",
    route: "/",
    image: list,
  },
  {
    title: "Тарифы",
    route: "/",
    image: list,
  },
  {
    title: "Добавить модель",
    route: "/",
    image: edit,
  },
];
