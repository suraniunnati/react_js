
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fatchData } from '../redux/ProductReducer/action'
import Aside from '../component/Aside'
import '../App.css'
import { Link } from 'react-router-dom'

function Product() {

    const data=useSelector(store=>store)
    console.log(data)
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(fatchData)
    },[])


  return (
    <div>
      <div id='main' className='border flex w-full'>
        <div className=' w-[22%]'>
          <Aside/>
        </div>
        <div className=' w-[75%] p-5 relative'>
          <div className='h-[70px]'>
            <div className='w-[220px] border flex items-center justify-evenly p-2  absolute right-5'>
            <span className='text-gray-400'> <i class="fa-solid fa-arrow-down-wide-short"></i> Short by : </span>
            <select name="" id="" className='w-[100px]'>
              <option value="">Popularity</option>
              <option value="">Price : High to Low</option>
              <option value="">Price : Low to High</option>
            </select>
            </div>
          </div>
          <div className='h-[900px] overflow-auto grid grid-cols-3 gap-8'>
          {
            data.product.map((el)=>{
             return <div>
              <div className='relative shadow'>
                <Link to={`/signleProduct/${el.id}`}><img src={el.img1} alt="" width={"100%"}/></Link>
                <h1 className='absolute bottom-1 left-1 bg-white rounded-xl w-[50px] h-[25px] text-center flex items-center justify-center shadow'><i className="fa-solid fa-star text-[10px] text-yellow-400"></i><span className='text-[12px] font-semibold ms-1'>{el.rate}</span></h1>
              </div>
              <div className='relative mt-2'>
              <i className="fa-regular fa-heart absolute right-1"></i>
                <b>{el.brand}</b>
              <h3 className='text-gray-400 text-sm'>{el.title}</h3>
              <p><span className='font-bold'>₹{el.price}</span>
              <span className='line-through text-[gray] ms-1'>₹{el.MRP}</span>
                  <span className='text-green-700 font-bold ms-1'>{el.off}% off</span>
              </p>
              <h2 className='border border-gray-400 text-sm text-gray-400 w-[100px] text-center mt-2 rounded'>Free Delarvi</h2>
              </div>
            
             </div>
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product