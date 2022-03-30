import * as yup from "yup";
export const imgExtensions = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
  "",
];
export const carFormValidationSchema = yup.object().shape({
  name: yup.string().required("Поле не должно быть пустым"),
  number: yup.string().required("Поле не должно быть пустым"),
  // category: yup.object().nullable().required("Поле не должно быть пустым"),
  priceMin: yup
    .number()
    .typeError("Пожалуйста введите число")
    .required("Поле не должно быть пустым"),
  priceMax: yup
    .number()
    .typeError("Пожалуйста введите число")
    .required("Поле не должно быть пустым")
    .moreThan(yup.ref("priceMin")),
  description: yup.string().required("Поле не должно быть пустым"),
  tank: yup.string().required("Поле не должно быть пустым"),
  category: yup.mixed().required("Поле не должно быть пустым"),
  image: yup
    .mixed()
    .required("Поле не должно быть пустым")
    .test(
      "image",
      "Недопустимый формат файла",
      (value) => value[0] && imgExtensions.includes(value[0].type)
    ),
});
