import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import AdminPage from "../pages/AdminPage/AdminPage";
import OrderList from "../components/OrderList/OrderList";
import ProtectedRoutes from "./ProtectedRoutes";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="orderlist" element={<OrderList />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
