import React from "react";
import classes from "./NotFound.module.scss";
import Button from "../UI/Button/Button";
import { useAppSelector } from "../../hooks/redux/redux-hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/slices/DataSlice";
import { LocalPaths } from "../../Paths/LocalPaths";
const NotFound = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const error = useAppSelector((state) => state.data.error);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
    dispatch(dataActions.removeError());
  };
  return (
    <section className={classes.error}>
      <div className={classes.container}>
        {location.pathname === LocalPaths.error ? (
          <div className={classes.messageContainer}>
            <h2 className={classes.status}>{error.status}</h2>
            <h1 className={classes.title}>{error.name}</h1>
            <p className={classes.message}>{error.message}</p>
          </div>
        ) : (
          <h2 className={classes.status}>Такой страницы не существует</h2>
        )}
        <Button
          type={"button"}
          title="Назад"
          onClick={handleClick}
          className={classes.button}
        />
      </div>
    </section>
  );
};

export default NotFound;
