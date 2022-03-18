import React, { FC, useEffect, useState } from "react";
import classes from "./CarForm.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../UI/Button/Button";
import { CarInput } from "./CarInput/CarInput";
import { carFormValidationSchema } from "../../../validation/CarFormValidation";
import ColorInput from "./ColorInput/ColorInput";
import CategoryInput from "./CategoryInput/CategoryInput";
import FileInput from "./FileInput/FileInput";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { useConvertFile } from "../../../hooks/useConvertFile";
import { usePostObject } from "../../../hooks/usePostObject";
import { carActions } from "../../../store/slices/CarSlice";
import { CarFormValues, carInput } from "../../../hooks/useInputs";
import { ICar } from "../../../interfaces/CarInterface";
interface ICarFormProps {
  car: ICar;
  inputs: carInput[];
}
const CarForm: FC<ICarFormProps> = ({ car, inputs }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carId } = useParams();
  const [colors, setColors] = useState<string[] | undefined>(car.colors);
  const categories = useAppSelector((state) => state.category.categories);
  const converter = useConvertFile();
  const createObject = usePostObject();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CarFormValues>({
    resolver: yupResolver(carFormValidationSchema),
    mode: "onSubmit",
  });
  const onAddColor = (color: string) => {
    if (colors) setColors([...colors, color]);
  };

  const onSubmit: SubmitHandler<CarFormValues> = async (data) => {
    const path = await converter(data.image[0]);
    const newCar = createObject("carPostData", {
      ...data,
      colors: colors,
      path: path,
    });
    if (newCar && carId)
      dispatch(carActions.startPutCar({ carId: carId, car: newCar }));
    if (newCar) dispatch(carActions.startPostCar(newCar));
  };

  return (
    <section className={classes.carForm}>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
          <h3 className={classes.formHeader}>Добавить модель</h3>
          <div className={classes.inputContainer}>
            {inputs.map((input) => (
              <CarInput
                defaultValue={input.defaultValue}
                key={input.name}
                name={input.name}
                id={input.name}
                placeholder={input.placeholder}
                label={input.label}
                type={input.type}
                register={register}
                errors={errors}
                isValid={isValid}
              />
            ))}
            <ColorInput
              onClick={onAddColor}
              colors={colors}
              handleDeleteColor={() => null}
            />
            <Controller
              name={"category"}
              control={control}
              render={({ field }) => (
                <CategoryInput
                  errors={errors}
                  field={field}
                  placeholder={"Категории"}
                  name={"Категории"}
                  items={categories}
                  optionKey={"name"}
                  id={"category"}
                />
              )}
            />
            <FileInput
              name={"image"}
              placeholder={"Изображение"}
              label={"Изображение"}
              type={"file"}
              register={register}
              errors={errors}
              id={"image"}
            />
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

export default CarForm;
