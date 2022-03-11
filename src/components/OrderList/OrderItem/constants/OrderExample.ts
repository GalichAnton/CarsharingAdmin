import { IOrder } from "../../../../interfaces/OrderInterface";

export const order: IOrder = {
  orderStatusId: {
    name: "Отмененые",
    id: "5e26a1f5099b810b946c5d8c",
  },
  cityId: {
    name: "Санкт-Петербург",
    id: "6005b8f9ad015e0bb6997778",
  },
  pointId: {
    name: "Пункт",
    address: "56 Литейный проспект",
    id: "615ae47018f5c2264119b939",
  },
  carId: {
    description: "новая мазда",
    priceMin: 1000,
    priceMax: 5000,
    name: "Mazda 6",
    number: "A456AA",
    categoryId: {
      name: "Бизнес",
      description: "Бизнес",
      id: "611171dd2aed9a0b9b8506f9",
    },
    thumbnail: {
      mimetype: "image/jpeg",
      originalname: "mazda.jpeg",
      size: 89834,
      path: "https://www.ixbt.com/img/n1/news/2021/10/5/084ed9e98d6d6c45ac49b1474002d2f0_large_large.jpg",
    },
    tank: 40,
    colors: ["красная"],
    id: "600ff0e5ad015e0bb6997d61",
  },
  color: "красная",
  dateFrom: 1647174300000,
  dateTo: 1648297500000,
  rateId: {
    price: 1500,
    rateTypeId: {
      unit: "сутки",
      name: "Суточный",
      id: "5e26a082099b810b946c5d83",
    },
    id: "60b958582aed9a0b9b7ed3d6",
  },
  price: 19500,
  isFullTank: true,
  isNeedChildChair: true,
  isRightWheel: false,
  id: "62289cc873b61100181016df",
};
