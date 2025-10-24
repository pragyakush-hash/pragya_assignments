import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);
  console.log("isauthenticated",isAuthenticated)
  return isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
