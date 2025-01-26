import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductForm from '../component/ProductForm'
import ProductList from '../component/ProductList'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProductForm/>}></Route>
            <Route path='/list' element={<ProductList/>}></Route>
            <Route path="/products/edit/:id" element={<ProductForm />} />
        </Routes>
    </div>
  )
}

export default MainRoute