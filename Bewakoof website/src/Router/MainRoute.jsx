import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import SingleProduct from '../pages/SingleProduct'


function MainRoute() {
  return (
    <div>
       <Routes>
        <Route path="/login" element={<Login/>}>login</Route>
        <Route path="/signup" element={<Signup/>}>signup</Route>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/product" element={<Product/>}>product</Route>
        <Route path="/signleProduct/:id" element={<SingleProduct/>}>product</Route>
        <Route path="/cart" element={<Cart/>}>cart</Route>
       </Routes>
    </div>
  )
}

export default MainRoute