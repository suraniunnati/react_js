import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductForm from '../component/ProductForm'
import ProductList from '../component/ProductList'
import EditProduct from '../component/EditProduct'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProductForm/>}></Route>
            <Route path='/list' element={<ProductList/>}></Route>
            <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
    </div>
  )
}

export default MainRoute