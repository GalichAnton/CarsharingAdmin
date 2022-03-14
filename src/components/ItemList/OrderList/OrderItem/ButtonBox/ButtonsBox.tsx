import React from "react";
import Button from "../../../../UI/Button/Button";
import classes from "./ButonsBox.module.scss";
import { AcceptButton } from "./images/AcceptButton";
import { CancelButton } from "./images/CancelButton";
import { ChangeButton } from "./images/ChangeButton";
const ButtonsBox = () => {
  return (
    <div className={classes.buttonBox}>
      <Button
        type={"button"}
        className={classes.button}
        disabled={false}
        title={"Готово"}
      >
        <div className={classes.orderButtonImage}>{AcceptButton}</div>
      </Button>
      <Button
        type={"button"}
        className={classes.button}
        disabled={false}
        title={"Отмена"}
      >
        <div className={classes.orderButtonImage}>{CancelButton}</div>
      </Button>
      <Button type={"button"} className={classes.button} title={"Изменить"}>
        <div className={classes.orderButtonImage}>{ChangeButton}</div>
      </Button>
    </div>
  );
};

export default ButtonsBox;
