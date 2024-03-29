import React, { MouseEvent, useEffect, useState } from "react";
import classes from "./Login.module.scss";
import Button from "../UI/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginValidation from "../../validation/LoginValidation";
import { Logo } from "./Logo";
import { Input } from "../UI/Inputs/Input";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/AuthSlice";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { useNavigate } from "react-router-dom";
export interface FormValues {
  username: string;
  password: string;
}
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const status = useAppSelector((state) => state.auth.status);
  const authError = useAppSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(LoginValidation),
    mode: "onSubmit",
  });
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (status === "logged" && token) navigate("/admin/orderlist");
    if (status === "registered") {
      setIsRegisterForm(false);
      alert("Теперь вы можете войти");
    }
  }, [status]);
  const onSubmit: SubmitHandler<FormValues> = ({ username, password }) => {
    if (isRegisterForm)
      dispatch(authActions.registerStart({ username, password }));
    else dispatch(authActions.loginStart({ username, password }));
  };
  return (
    <section className={classes.login}>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <div className={classes.logo}>{Logo}</div>
          <h2 className={classes.title}>Need for drive</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
          <h3 className={classes.formHeader}>Вход</h3>
          <div className={classes.inputContainer}>
            <Input
              name="username"
              id="username"
              placeholder="Введите логин"
              label="Логин"
              type="text"
              register={register}
              errors={errors}
              isValid={isValid}
            />
            <Input
              name="password"
              id="password"
              placeholder="Введите пароль"
              label="Пароль"
              type="password"
              register={register}
              errors={errors}
              isValid={isValid}
            />
          </div>
          {authError && (
            <span className={classes.errorMessage}>{authError}</span>
          )}
          <div className={classes.buttonContainer}>
            <Button
              title={
                isRegisterForm
                  ? "Уже есть аккаунт?"
                  : "Хотите зарегистрироваться?"
              }
              className={classes.registerButton}
              type="button"
              background={"transparent"}
              onClick={() => setIsRegisterForm((prev) => !prev)}
            />
            <Button
              title={isRegisterForm ? "Зарегистрироваться" : "Войти"}
              className={classes.loginButton}
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
