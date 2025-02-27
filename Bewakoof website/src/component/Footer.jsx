import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white text-sm p-2'>
    <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg" alt="" width={"200px"} className='p-3'/>
   
    <div className='grid grid-cols-4 gap-10 '>
        <div className=' p-4'>
            <h3 className='text-[#FFD232] font-bold mt-2 text-[16px]'>CUSTOMER SERVICE</h3>
            <p className='mt-3'>Contact Us</p>
            <p className='mt-1'>Track Order</p>
            <p className='mt-1'>Return Order</p>
            <p className='mt-1'>Cancel Order</p>
            <p className='mt-2'><i class="fa-solid fa-truck-fast"></i> 15 Days Return Policy*</p>
            <p className='mt-1'><i class="fa-solid fa-money-bill-wave"></i> Cash On Delivery*</p>
        </div>
        <div className=' p-4'>
        <h3 className='text-[#FFD232] font-bold mt-2 text-[16px]'>CUSTOMER SERVICE</h3>
            <p className='mt-3'>About Us</p>
            <p className='mt-1'>Terms & Conditions</p>
            <p className='mt-1'>Privacy Policy</p>
            <p className='mt-1'>We are Hiring</p>
            <h3 className='text-[#FFD232] font-bold mt-2 text-[16px]'>DOWNLOAD THE APP</h3>
            <div className='flex mt-2'>
            <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_android_v1.png&w=256&q=75" alt="" width={"100px"}/>
            <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_ios_v1.png&w=256&q=75" alt="" width={"100px"} className='ms-2'/>
            </div>
        </div>
        <div className=' p-4'>
        <h3 className='text-[#FFD232] font-bold mt-2 text-[16px]'>CONNECT WITH US</h3>
        <p className='mt-3'><i class="fa-brands fa-square-facebook"></i> 4.7M People like this</p>
        <p className='mt-1'><i class="fa-brands fa-instagram"></i> 1M People like this</p>
        <i class="fa-brands fa-twitter mt-3"></i>
        <i class="fa-brands fa-pinterest ms-2"></i>
        <i class="fa-solid fa-soap ms-2"></i>
        <i class="fa-solid fa-apple-whole ms-2"></i>
        <h3 className='text-[#FFD232] font-bold mt-2 text-[16px]'>100% SECURE PAYMENT</h3>
        </div>
        <div className=' p-4'>
        <h3 className='text-[#FFD232] font-bold mt-2 text-[16px]'>KEEP UP TO DATE</h3>
        <input type="text" placeholder='Enter Email Id:' className='p-2 mt-3 bg-black border-b border-[#FFD232]'/>
        <button className='bg-[#FFD232] text-black p-2 font-bold'>SUBSCRIBE</button>
        </div>
    </div>
    </div>
  )
}

export default Footer