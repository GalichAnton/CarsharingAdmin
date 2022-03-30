import * as yup from "yup";

export const orderFormValidationSchema = yup.object().shape({
  city: yup.mixed().required("Поле не должно быть пустым"),
  car: yup.mixed().required("Поле не должно быть пустым"),
  color: yup.mixed().required("Поле не должно быть пустым"),
  rate: yup.mixed().required("Поле не должно быть пустым"),
  orderStatus: yup.mixed().required("Поле не должно быть пустым"),
  tank: yup.mixed().required("Поле не должно быть пустым"),
  childChair: yup.mixed().required("Поле не должно быть пустым"),
  rightWheel: yup.mixed().required("Поле не должно быть пустым"),
});
