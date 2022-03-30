import { useCallback } from "react";

export const usePostObject = () => {
  const createCarObject = useCallback((data: any) => {
    const object = {
      priceMax: data.priceMax,
      priceMin: data.priceMin,
      name: data.name,
      number: data.number,
      colors: data.colors,
      tank: data.tank,
      thumbnail: data.image.length && {
        size: data.image[0].size,
        originalname: data.image[0].name,
        mimetype: data.image[0].type,
        path: data.path,
      },

      description: data.description,
      categoryId: data.category.id,
    };
    return object;
  }, []);

  const createOrderObject = useCallback((data: any) => {
    const object = {
      pointId: { name: "Point", address: data.point.value, id: data.point.id },
      orderStatusId: data.orderStatus,
      cityId: data.city,
      carId: data.car,
      color: data.color.value,
      rateId: data.rate,
      isFullTank: data.tank.value === "Да",
      isNeedChildChair: data.childChair === "Да",
      isRightWheel: data.rightWheel === "Да",
    };
    return object;
  }, []);

  return { createCarObject, createOrderObject };
};
