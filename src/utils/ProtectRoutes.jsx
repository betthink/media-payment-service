import React from "react";
import { tokenLocal } from "../global/token";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = () => {
  return tokenLocal !== null ? <Outlet /> : <Navigate  to="login" />;
};

export default ProtectRoutes;
