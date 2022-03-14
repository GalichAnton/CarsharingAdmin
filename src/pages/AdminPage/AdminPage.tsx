import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./AdminPage.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import { navItems } from "../../components/NavBar/constants/NavItems";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import cn from "classnames";
const AdminPage = () => {
  const isOpen = useAppSelector((state) => state.modal.isBurgerOpen);
  return (
    <>
      <div className={classes.wrapper}>
        <div
          className={cn(classes.sideBar, {
            [classes.sideBar_active]: isOpen,
          })}
        >
          <NavBar navItems={navItems} />
        </div>

        <div className={classes.content}>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
