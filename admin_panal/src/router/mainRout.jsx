import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import User from "../pages/User";
import Product from "../pages/Product";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default MainRoutes;
