import classes from "./App.module.scss";
import test from "../../assets/img/about_img.png";
function App() {
  return (
    <div className={classes.App}>
      <h1>Hello</h1>
      <img src={test} alt="test" />
    </div>
  );
}

export default App;
