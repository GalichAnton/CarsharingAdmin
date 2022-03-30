import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../components/Login/Login";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";

describe("login tests", () => {
  test("check render login", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("check swap to register form", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const button = screen.getByText("Хотите зарегистрироваться?");
    fireEvent.click(button);
    expect(screen.getByText("Уже есть аккаунт?")).toBeInTheDocument();
  });
});
