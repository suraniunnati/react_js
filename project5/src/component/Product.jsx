import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productData } from '../Redux/action'
import '../App.css'

function Product() {
    // const [state,setState]=useState([])
    const Data=useSelector(store=>store)
    console.log(Data);
    
    const dispatch=useDispatch()

     useEffect(()=>{

        dispatch(productData)
       
     },[])     
     
     return (<div>
        {Data.loding ?<div id='load'><img src="https://media4.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif?cid=6c09b95219g387oyn1e9gb3scepanek8ix787aylylkklzd0&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" className='w-[150px]'/></div>:<div className='grid grid-cols-5 gap-10 p-5'>
       { Data.product.map((el,index)=>{
            return <div key={index} className=' shadow-lg h-[300px] p-2 rounded-lg bg-white'>
                <img src={el.thumbnail} alt="" width={"100%"} className='h-[60%]'/>
                <h3>{el.title}</h3>
                <h4>{el.brand}</h4>
                <span className='font-semibold'>₹{el.price}</span>
                <span className='ms-2'>{el.discountPercentage}%</span>
                <span className='ms-2'>⭐({el.rating})</span>
            </div>
        })}</div>}
    </div>
  )
}

export default Product