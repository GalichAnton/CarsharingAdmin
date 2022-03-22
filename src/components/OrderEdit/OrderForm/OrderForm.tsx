import React, { FC } from "react";
import classes from "./OrderForm.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { usePostObject } from "../../../hooks/usePostObject";
import { IOrder, NewOrder } from "../../../interfaces/OrderInterface";
import { OrderFormValues, orderInput } from "../../../hooks/useOrderInputs";
import OrderInput from "./OrderInput/OrderInput";
import { orderFormValidationSchema } from "../../../validation/OrderFormValidatonShema";
import { orderActions } from "../../../store/slices/OrderSlice";
interface IOrderFormProps {
  order: IOrder;
  inputs: orderInput[];
}
const OrderForm: FC<IOrderFormProps> = ({ order, inputs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { createOrderObject } = usePostObject();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OrderFormValues>({
    mode: "onSubmit",
    resolver: yupResolver(orderFormValidationSchema),
  });

  const onSubmit: SubmitHandler<OrderFormValues> = async (data) => {
    console.log(data);
    const newOrder: NewOrder = createOrderObject(data);
    if (newOrder && orderId)
      dispatch(
        orderActions.startPutOrder({ orderId: orderId, order: newOrder })
      );
  };

  return (
    <section className={classes.orderForm}>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
          <h3 className={classes.formHeader}>Изменить заказ</h3>
          <div className={classes.inputContainer}>
            {inputs.map((input) => (
              <Controller
                name={input.name}
                control={control}
                defaultValue={input.defaultValue}
                render={({ field }) => (
                  <OrderInput
                    errors={errors}
                    field={field}
                    placeholder={input.placeholder}
                    name={input.name}
                    label={input.label}
                    items={input.items}
                    optionKey={"name"}
                    id={input.id}
                  />
                )}
              />
            ))}
          </div>
          <div className={classes.buttonContainer}>
            <Button
              title={"Добавить"}
              className={classes.addButton}
              type="submit"
            />
            <Button
              title={"Назад"}
              className={classes.backButton}
              type="button"
              onClick={() => navigate(-1)}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
