import React from 'react'
import { useState } from 'react'
import { addData, editData } from '../redux/action'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ProductForm() {
    const { id } = useParams();
    const dispatch =useDispatch()
    const data=useSelector(store=>store)
    console.log(data);
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
        addData(state)
        console.log(state)

        dispatch(editData)(id,state)
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' name='title' onChange={handle}/>
            <input type="text" placeholder='Image URL' name='img' onChange={handle}/>
            <input type="text" placeholder='Price' name='price' onChange={handle}/>
            <input type="submit" />
        </form>

        <Link to="/list">Productlist</Link>
    </div>
  )
}

export default ProductForm