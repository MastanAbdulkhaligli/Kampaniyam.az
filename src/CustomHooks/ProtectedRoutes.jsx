import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";

const useAuth = (isLoggedIn) => {
  const user = { loggedIn: isLoggedIn };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector((state) => state.user.currentUser);
  const isAuth = useAuth(isLoggedIn);
  return isAuth ? <Outlet /> : <SignIn />;
};

export default ProtectedRoutes;
