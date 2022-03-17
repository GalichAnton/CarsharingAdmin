import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const token = localStorage.getItem("access_token");
  return token ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
