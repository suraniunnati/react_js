import { Routes,Route, Navigate } from "react-router-dom"
import Home from "../pages/home"
import Signup from "../pages/signup"
import Login from "../pages/Login"
import Product from "../pages/Product"
import SinglePage from "../pages/SinglePage"
import PrivateRoute from "../component/PrivateRoute"

function MainRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/product" element={
                <PrivateRoute>
                <Product/>
                </PrivateRoute>
                }></Route>
            <Route path="/singleproduct" element={<SinglePage/>}></Route>
        </Routes>
    )
}

export default MainRoute