import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import AdminPage from "../pages/AdminPage/AdminPage";
import ItemList from "../components/ItemList/ItemList";
import ProtectedRoutes from "./ProtectedRoutes";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="orderlist" element={<ItemList />} />
            <Route path="carlist" element={<ItemList />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
