import React, { useState } from "react";
import Filter from "../Filter";
import Button from "../../UI/Button/Button";
import classes from "../FilterBar.module.scss";
import cn from "classnames";
import { useAppSelector } from "../../../hooks/redux/redux-hooks";
import { IOption } from "../../../interfaces/OptionInterface";
import { ICategory } from "../../../interfaces/CarInterface";
import { useDispatch } from "react-redux";
import { carActions } from "../../../store/slices/CarSlice";
const CarFilterBar = () => {
  const dispatch = useDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const [category, setCategory] = useState<ICategory>({} as ICategory);
  const handleChange = (item: IOption) => {
    const selectedCategory = categories.find(
      (category) => category.name === item.value
    )!;
    selectedCategory && setCategory(selectedCategory);
  };

  const clickHandler = () => {
    const params: Record<string, any> = {
      page: 0,
      categoryId: category ? category.id : undefined,
    };

    Object.keys(params).forEach((key) => {
      if (params[key] === undefined) {
        delete params[key];
      }
    });
    dispatch(carActions.startGetCars(params));
  };
  const onReset = () => {
    setCategory({} as ICategory);
    dispatch(carActions.startGetCars({ page: 0 }));
  };
  return (
    <div className={classes.filterBar}>
      <div className={classes.filterContainer}>
        <Filter
          optionKey={"name"}
          name="category"
          placeholder="Категории"
          items={categories}
          onChange={handleChange}
          valueState={category?.name}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          type={"button"}
          title="Reset"
          onClick={onReset}
          className={classes.buttonRed}
        />
        <Button
          type={"button"}
          title="Apply"
          onClick={clickHandler}
          className={cn(classes.button)}
        />
      </div>
    </div>
  );
};

export default CarFilterBar;
