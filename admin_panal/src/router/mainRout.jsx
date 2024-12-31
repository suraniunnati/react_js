import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import User from "../pages/User";
import Product from "../pages/Product";
import PrivateRoute from "../components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/product" element={
        < PrivateRoute>
        <Product />
        </PrivateRoute>
      } />
    </Routes>
  );
};

export default MainRoutes;
