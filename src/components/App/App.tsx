import classes from "./App.module.scss";
import Router from "../../routes/Router";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/slices/DataSlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.dataFetching());
  }, []);
  return (
    <div className={classes.App}>
      <Router />
    </div>
  );
}

export default App;
