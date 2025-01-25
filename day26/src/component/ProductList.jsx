import React, { useEffect } from 'react'
import { GetData } from '../redux/action'

function ProductList() {
    useEffect(()=>{
        GetData()
    },[])
  return (
    <div>ProductList</div>
  )
}

export default ProductList