import * as yup from "yup";
const regexp = /[a-zA-Z0-9]/;
const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Обзательное поле, минимум 3 символа")
    .min(3, "Минимум 3 символа")
    .matches(regexp, "Логин должен использовать латинские буквы и цифры"),

  password: yup
    .string()
    .required("Минимум 4 символа")
    .min(4, "Обзательное поле, минимум 4 символа")
    .matches(regexp, "Пароль должен использовать латинские буквы и цифры"),
});

export default loginValidationSchema;
