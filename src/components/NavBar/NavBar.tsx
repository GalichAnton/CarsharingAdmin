import React, { FC } from "react";
import classes from "./NavBar.module.scss";
import { Logo } from "../Login/Logo";
import { CrossButton } from "./CrossButton";
import { INavItem } from "./constants/NavItemInterface";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/slices/ModalSlice";
interface INavBarProps {
  navItems: INavItem[];
}
const NavBar: FC<INavBarProps> = ({ navItems }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.adminNavbarContainer}>
      <div className={classes.adminNavbarLogo}>
        <div className={classes.logoBox}>
          <div className={classes.logoImage}>{Logo}</div>
        </div>
        <h2 className={classes.logoTitle}>Need for drive</h2>
        <button
          onClick={() => {
            dispatch(modalActions.setOpenBurger(false));
          }}
          className={classes.crossButton}
        >
          {CrossButton}
        </button>
      </div>

      <nav className={classes.adminNavbar}>
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            className={classes.linkContainer}
            to={item.route}
          >
            <div className={classes.linkImage}>{item.image}</div>
            <p className={classes.link}>{item.title}</p>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
