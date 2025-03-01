import React from 'react'

function Section2() {
  return (
  <>
    <div className='h-[800px] w-full bg-[url(https://images.bewakoof.com/web/bg-abandonded-cart-desktop.svg)] bg-cover bg-center'>
        <div className='h-[90%] w-[40%] m-auto mt-10 '>
            <p className='text-[#ffffffb2] text-center pt-7'>Your cart is missing you</p>
            <p className='text-xl uppercase text-white font-medium text-center'>You're Missing out on Savings of</p>
            <div className='text-center'>
            <button className='border h-[50px] w-[40px] mt-8  text-3xl text-[#F9CB74] bg-[#B865E3] rounded-sm border-2 border-[#CA8CEA]'>₹</button>
            <button className='border h-[50px] w-[40px] mt-8 ms-3 text-3xl text-[#F9CB74] bg-[#B865E3] rounded-sm border-2 border-[#CA8CEA]'>2</button>
            <button className='border h-[50px] w-[40px] mt-8 ms-3 text-3xl text-[#F9CB74] bg-[#B865E3] rounded-sm border-2 border-[#CA8CEA]'>7</button>
            <button className='border h-[50px] w-[40px] mt-8 ms-3 text-3xl text-[#F9CB74] bg-[#B865E3] rounded-sm border-2 border-[#CA8CEA]'>5</button>
            <button className='border h-[50px] w-[40px] mt-8 ms-3 text-3xl text-[#F9CB74] bg-[#B865E3] rounded-sm border-2 border-[#CA8CEA]'>0</button></div>

            <div className='h-[75%] w-full mt-4 flex justify-evenly items-center flex-wrap'>
            <div className='h-[75%] w-[44%] rounded-xl bg-white'>
                <img src="https://images.bewakoof.com/t320/women-s-purple-hoodie-501275-1670307148-1.jpg" alt="" className='rounded-xl w-[95%] m-auto h-[80%] mt-1'/>
                <p className='pt-2 ps-3'>Pay only <span className=' font-medium'>₹899</span> <span className='text-[#8f98a9] font-medium line-through'>₹2699</span></p>
                <p className='ps-3 pt-2 text-[#278c03] font-bold'>₹1800 OFF</p>
            </div>
            <div className='h-[75%] w-[44%] rounded-xl bg-white'>
                <img src="https://images.bewakoof.com/t320/women-s-green-the-panda-way-graphic-printed-oversized-t-shirt-581312-1737092527-1.jpg" alt="" className='rounded-xl w-[95%] m-auto h-[80%] mt-1'/>
                <p className='pt-2 ps-3'>Pay only <span className=' font-medium'>₹549 </span> <span className='text-[#8f98a9] font-medium line-through'>₹1499</span></p>
                <p className='ps-3 pt-2 text-[#278c03] font-bold'>₹950 OFF</p>
            </div>
            <div className='h-[13%] w-[92%] rounded-xl bg-[#FFD232] text-center pt-2'>
            <p className='text-[#292d35] font-bold text-base'>Get it Now</p>
            <p className='text-[#292d3580] font-semi-bold text-2xs'>Unlock Best Price on Checkout</p>
            </div>
                
            </div>
        </div>
    </div>
  </>
  )
}

export default Section2