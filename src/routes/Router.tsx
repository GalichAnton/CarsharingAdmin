import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import AdminPage from "../pages/AdminPage/AdminPage";
import ItemList from "../components/ItemList/ItemList";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderList from "../components/ItemList/OrderList/OrderList";
import CarList from "../components/ItemList/CarList/CarList";
import CitiesList from "../components/ItemList/CitiesList/CitiesList";
import RateList from "../components/ItemList/RateList/RateList";
import NotFound from "../components/NotFound/NotFound";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route element={<ItemList />}>
              <Route path="orderlist" element={<OrderList />} />
              <Route path="carlist" element={<CarList />} />
              <Route path="citieslist" element={<CitiesList />} />
              <Route path="ratelist" element={<RateList />} />
            </Route>
            <Route path={"error"} element={<NotFound />} />
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
