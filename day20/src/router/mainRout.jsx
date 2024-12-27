import { Routes,Route } from "react-router-dom"
import Home from "../pages/home"
import Signup from "../pages/signup"
import Login from "../pages/login"
import Product from "../pages/Product"
import SinglePage from "../pages/SinglePage"

function MainRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/singleproduct" element={<SinglePage/>}></Route>
        </Routes>
    )
}

export default MainRoute