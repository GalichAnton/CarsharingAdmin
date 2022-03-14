import React from "react";
import classes from "./SearchLine.module.scss";
import { Search } from "../images/Search";
import cn from "classnames";

const SearchLine = () => {
  return (
    <div className={classes.container}>
      <div className={cn(classes.search)}>
        <button className={classes.icon}>{Search}</button>
        <input placeholder="Поиск ..." className={classes.input} type="text" />
      </div>
    </div>
  );
};

export default SearchLine;
