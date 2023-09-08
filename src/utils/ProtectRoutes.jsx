import React from "react";
import { tokenLocal } from "../global/token";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectRoutes = () => {
  const user = (state) => state.user.value;
  const { isLoggin, token } = useSelector(user);
  console.log(isLoggin);
  // console.log(tokenLocal !== null);
  return isLoggin || tokenLocal !== null ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectRoutes;
