import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editData } from '../redux/action'

function EditProduct() {
    const {id} =useParams()
    const data = useSelector(store=>store)
    const dispatch = useDispatch()
    console.log(id)
     const [state,setState]=useState({
            title:"",
            img:"",
            price:""
        })
    
    useEffect(()=>{
        data.product.map((el)=>{
            if(el.id==id){
                console.log(el)
                setState(el)
            }
        })

    },[])    
        const handle=(e)=>{
            const {name,value}=e.target 
            setState ({...state,[name]:value})
        }
    
        const handleSubmit=(e)=>{
            e.preventDefault()
           dispatch(editData)(id,state)

           setState({
            title:"",
            img:"",
            price:""
           })
            
        }
  return (
    <div>
         <form action="" onSubmit={handleSubmit}>
            <input type="text" value={state.title} placeholder='Product Name' name='title' onChange={handle}/>
            <input type="text" value={state.img} placeholder='Image URL' name='img' onChange={handle}/>
            <input type="text" value={state.price} placeholder='Price' name='price' onChange={handle}/>
            <input type="submit" value="edit"/>
        </form>
    </div>
  )
}

export default EditProduct