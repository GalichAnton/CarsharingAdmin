import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import AdminPage from "../pages/AdminPage/AdminPage";
import OrderList from "../components/OrderList/OrderList";
const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route path="orderlist" element={<OrderList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
