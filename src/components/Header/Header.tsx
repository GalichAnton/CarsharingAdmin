import React, { useState } from "react";
import classes from "./Header.module.scss";
import burgerButton from "./images/BurgerButton";
import { NotificationIcon } from "./images/notificationIcon";
import { DropDownIcon } from "./images/DropDownIcon";
import ava from "./images/ava.jpg";
import cn from "classnames";
import SearchLine from "./SearchLine/SearchLine";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/slices/ModalSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classes.header}>
      <button
        onClick={() => dispatch(modalActions.setOpenBurger(true))}
        className={classes.burger}
      >
        <div className={classes.burgerImage}>{burgerButton}</div>
      </button>
      <div className={classes.searchBar}>
        <SearchLine />
      </div>
      <div className={classes.notifications}>
        <div>{NotificationIcon}</div>
        <div className={classes.counter}>12</div>
      </div>
      <div className={classes.profile}>
        <img className={classes.avatar} src={ava} />
        <p className={classes.profileName}>Admin</p>
        <div className={classes.dropDown}>
          <button
            className={classes.dropDownButton}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {DropDownIcon}
          </button>
          <div
            className={cn(classes.dropDownContent, {
              [classes.dropDownContentActive]: isOpen,
            })}
          >
            <button className={classes.profileButton}>Профиль</button>

            <button className={classes.profileButton}>Выйти</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
