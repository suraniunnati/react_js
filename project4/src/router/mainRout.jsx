import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import User from "../pages/User";
import Product from "../pages/Product";
import PrivateRoute from "../components/PrivateRoute";
import ShowData from "../components/ShowData";
import EditProduct from "../pages/EditProduct";
import Signup from "../pages/Signup";

const MainRoutes = () => {
  return (
    <Routes>
       <Route path="/signUP" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/product" element={
       
        <Product />
      
      } />
      <Route path="/product/form" element={ < PrivateRoute><Product />  </PrivateRoute>} />
      <Route path="/product/list" element={<ShowData />} />
      <Route path="/editProduct/:id" element={<EditProduct/>}/>
    </Routes>
  );
};

export default MainRoutes;
