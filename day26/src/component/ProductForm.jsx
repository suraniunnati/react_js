import React from 'react'
import { useState } from 'react'
import { AddData } from '../redux/action'

function ProductForm() {
    const [state,setState]=useState({
        title:"",
        img:"",
        price:""
    })

    const handle=(e)=>{
        const {name,value}=e.target 
        setState ({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        AddData(state)
        console.log(state)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' name='title' onChange={handle}/>
            <input type="text" placeholder='Image URL' name='img' onChange={handle}/>
            <input type="text" placeholder='Price' name='price' onChange={handle}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ProductForm