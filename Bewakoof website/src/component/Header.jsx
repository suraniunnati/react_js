import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'

function Header() {
  return (
   <header className='h-[150px]'>
    <div className="hedline h-[20%] bg-[#EEEEEE] hidden md:flex justify-between items-center px-2 text-[12px]">
        <div className='flex justify-evenly w-[35%] xl:w-[26%]'>
            <p>Offers</p>
            <p>Fanbook</p>
            <p><i class="fa-solid fa-mobile-screen-button fa-2xs"></i> Download App </p>
            <p>Find a store near me</p>
        </div>
        <div  className='flex justify-evenly w-[200px]'>
        <p>Contact Us</p>
        <p>Track Order</p>
        </div>
    </div>
    <div className="nav1 h-[40%] sm:flex justify-around items-center md:border-b">
        <div className='flex'>
        <div className='logo'>
            <img src={logo} alt="" width={"50px"} className='md:hidden'/>
            <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" width={"200px"} className='hidden md:block'/>
        </div>
        <div className='flex justify-evenly items-center w-[350px] text-sm'>
            <Link>MEN</Link>
            <Link>WOMEN</Link>
            <Link>MOBILE COVERS</Link></div>
        </div>
        <div className='flex items-center'>
            <div className='inpute sm:w-[210px] md:w-[300px] h-[40px] bg-[#EAEAEA] flex items-center justify-evenly'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search by Product' className='bg-[#EAEAEA] md:w-[250px] border'/>
            </div>
            <div className='w-[150px] flex items-center justify-evenly'>
                <p className='text-gray-300'>|</p>
                <Link to="/login" className='text-[12px] font-bold'>LOGIN</Link>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-square"></i>
            </div>
        </div>
       
    </div>
    <nav className='h-[40%] hidden md:flex justify-evenly items-center font-medium md:text-[10px] xl:text-[15px]'>
        <Link>MEN</Link>
        <Link>WOMEN</Link>
        <Link>WINTERWEAR</Link>
        <Link>PLUS SIZE</Link>
        <Link>ACCESSORIES</Link>
        <Link>OFFICIAL MERCH</Link>
        <Link>SNEAKERS</Link>
        <Link>BEWAKOOF AIR</Link>
        <Link>HEAVY DUTY</Link>
        <Link>CUSTOMIZATION</Link>
    </nav>
   </header>
  )
}

export default Header