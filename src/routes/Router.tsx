import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import AdminPage from "../pages/AdminPage/AdminPage";
import OrderList from "../components/OrderList/OrderList";
const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route path="orderlist" element={<OrderList />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default Router;
