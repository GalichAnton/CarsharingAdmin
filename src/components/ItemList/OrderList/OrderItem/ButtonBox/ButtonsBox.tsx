import React, { FC } from "react";
import Button from "../../../../UI/Button/Button";
import classes from "./ButonsBox.module.scss";
import { AcceptButton } from "./images/AcceptButton";
import { CancelButton } from "./images/CancelButton";
import { ChangeButton } from "./images/ChangeButton";
import { useNavigate } from "react-router-dom";
interface IButtonBoxProps {
  orderId: string;
}
const ButtonsBox: FC<IButtonBoxProps> = ({ orderId }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/admin/order/${orderId}`);
  };
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
      <Button
        onClick={onClick}
        type={"button"}
        className={classes.button}
        title={"Изменить"}
      >
        <div className={classes.orderButtonImage}>{ChangeButton}</div>
      </Button>
    </div>
  );
};

export default ButtonsBox;
