import React, { useState } from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import Product from '../pages/Product'

function Aside() {

  const data=useSelector(store=>store)
  console.log(data)
  const dispatch=useDispatch()


  let [state,setState]=useState({
    category: true,
    brand: true,
    color: true,
    discount: true,
    ratings: true,
    design: true,
  })

  const dropDown=(key)=>{
    setState((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const fil=()=>{
    // dispatch(Product)
  }

  return (
    <div className='p-5 ms-5 h-[950px] overflow-auto'>
        <div className='border-b-2 h-[50px]'>
            <h1 className='text-xl font-semibold'>Filters</h1>
        </div>
        <div className='border-b pb-3'>
            <div className='flex items-center justify-between h-[40px] mt-2' onClick={()=>dropDown("category")}>
              <li>Category</li>
              {state.category ?   <i className="fa-solid fa-angle-up "></i>:<i className="fa-solid fa-angle-down"></i> }
            </div>
           {state.category && <div className=' ms-4' id='show'>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3' onChange={()=>fil(data.product.category=="T-shirt")}/><span className='text-gray-400'>T-Shirt</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Shirt</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Joggers</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Hoodies</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Pant</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Dress</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Jacket</span><br/>
            </div>}
        </div>
        <div className='border-b pb-3'>
            <div className='flex items-center justify-between h-[40px] mt-2' onClick={()=>dropDown("brand")}><li>Brand</li>
            {state.brand ?   <i className="fa-solid fa-angle-up "></i>:<i className="fa-solid fa-angle-down"></i> }
            </div>
            {state.brand && <div className=' ms-4'>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>bewakoof®</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Bewakoof Air®</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Bewakoof Heavy Duty®</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>bewakoof x disney</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>bewakoof x friends</span><br/>
            </div>}
        </div>
        <div className='border-b pb-3'>
            <div className='flex items-center justify-between h-[40px] mt-2' onClick={()=>dropDown("color")}><li>Color</li>
            {state.color ?   <i className="fa-solid fa-angle-up "></i>:<i className="fa-solid fa-angle-down"></i> }
            </div>
          {state.color &&  <div className=' ms-4'>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2"></i><span className='text-gray-400'>Black</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2 text-white shadow rounded-full"></i><span className='text-gray-400'>White</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2 text-[blue]"></i><span className='text-gray-400'>Blue</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2 text-[pink]"></i><span className='text-gray-400'>Pink</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2 text-[gray]"></i><span className='text-gray-400'>Gray</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2 text-[green]"></i><span className='text-gray-400'>Green</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><i className="fa-solid fa-circle me-2 text-[red]"></i><span className='text-gray-400'>Red</span><br/>
            </div>}
        </div>
        <div className='border-b pb-3'>
            <div className='flex items-center justify-between h-[40px] mt-2' onClick={()=>dropDown("discount")}><li>Discount</li>
            {state.discount ?   <i className="fa-solid fa-angle-up "></i>:<i className="fa-solid fa-angle-down"></i> }
            </div>
           {state.discount && <div className=' ms-4'>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>10% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>20% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>30% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>40% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>50% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>60% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>70% or more</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>80% or more</span><br/>
            </div>}
        </div>
        <div className='border-b pb-3'>
            <div className='flex items-center justify-between h-[40px] mt-2' onClick={()=>dropDown("ratings")}><li>Ratings</li>
            {state.ratings ?   <i className="fa-solid fa-angle-up "></i>:<i className="fa-solid fa-angle-down"></i> }
            </div>
          { state.ratings && <div className=' ms-4'>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>4.5 And Above</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>4 And Above</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>3.5 And Above</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>0 And Above</span><br/>
            </div>}
        </div>
        <div className='border-b pb-3'>
            <div className='flex items-center justify-between h-[40px] mt-2' onClick={()=>dropDown("design")}><li>Design</li>
            {state.design ?   <i className="fa-solid fa-angle-up "></i>:<i className="fa-solid fa-angle-down"></i> }
            </div>
           {state.design && <div className=' ms-4'>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Graphic print</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Solid</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Aop</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Typography</span><br/>
                <input type="checkbox" className='w-[20px] h-[20px] border-2 border-gray-400 me-3 mt-3'/><span className='text-gray-400'>Printed</span><br/>
                
            </div>}
        </div>
    </div>
  )
}

export default Aside