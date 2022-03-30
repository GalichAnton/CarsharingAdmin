import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { navItems } from "../components/NavBar/constants/NavItems";

describe("router tests", () => {
  test("check render pages", () => {
    localStorage.setItem(
      "access_token",
      "c401d9b4825fb0f3aa84382823eeb33c49919ddd"
    );
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar navItems={navItems} />
        </BrowserRouter>
      </Provider>
    );

    const link = screen.getByText("Список авто");
    fireEvent.click(link);
    expect(window.location.pathname).toEqual("/admin/carlist");
  });
});
