import React, { MouseEvent } from "react";
import classes from "./Login.module.scss";
import Button from "../UI/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginValidation from "../../validation/LoginValidation";
import { Logo } from "./Logo";
import { Input } from "../UI/Inputs/Input";
import { useNavigate } from "react-router-dom";
export interface FormValues {
  username: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(LoginValidation),
    mode: "onSubmit",
  });
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/admin/orderlist");
  };
  return (
    <section className={classes.login}>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <div className={classes.logo}>{Logo}</div>
          <h2 className={classes.title}>Need for drive</h2>
        </div>
        <form className={classes.loginForm}>
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
          <div className={classes.buttonContainer}>
            <Button
              title="Запросить доступ"
              className={classes.registerButton}
              type="button"
              background={"transparent"}
            />
            <Button
              title="Войти"
              className={classes.loginButton}
              type="button"
              onClick={(e) => handleClick(e)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
