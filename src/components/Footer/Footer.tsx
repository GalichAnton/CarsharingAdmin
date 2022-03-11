import React from "react";
import classes from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <nav className={classes.links}>
          <NavLink className={classes.link} to={"/admin/orderlist"}>
            Главная страница
          </NavLink>
          <NavLink className={classes.link} to={"/admin/orderlist"}>
            Ссылка
          </NavLink>
        </nav>
        <p className={classes.text}>Copyright © 2020 Simbirsoft</p>
      </div>
    </footer>
  );
};

export default Footer;
