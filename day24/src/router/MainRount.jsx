import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../component/signup'
import Login from '../component/login'
import Product from '../component/Product'
import PrivateRoute from '../component/PrivateRoute'
import Home from '../component/Home'

const MainRount=()=> {
    return (<>

        <Routes>
            <Route path='/home' element={<Home/>}>Home</Route>
            <Route path='/signup' element={<Signup />}>signup</Route>
            <Route path='/login' element={<Login />}>signup</Route>
            <Route path='/product' element={
                <PrivateRoute>
                    <Product />
                </PrivateRoute>
            }>product</Route>
        </Routes>

    </>

    )
}

export default MainRount