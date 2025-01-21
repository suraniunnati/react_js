import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header className='h-[150px]'>
    <div className="hedline h-[20%] bg-[#EEEEEE] flex justify-between items-center px-2 text-sm">
        <div className='flex justify-evenly w-[30%]'>
            <p>Offers</p>
            <p>Fanbook</p>
            <p>Download App </p>
            <p>Find a store near me</p>
        </div>
        <div  className='flex justify-evenly w-[200px]'>
        <p>Contact Us</p>
        <p>Track Order</p>
        </div>
    </div>
    <div className="nav1 h-[40%] flex justify-around items-center border-b">
        <div className='flex'>
        <div className='logo'>
            <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" width={"200px"}/>
        </div>
        <div className='flex justify-evenly w-[350px]'>
            <Link>MEN</Link>
            <Link>WOMEN</Link>
            <Link>MOBILE COVERS</Link></div>
        </div>
        <div className='flex items-center'>
            <div className='inpute w-[300px] h-[40px] bg-[#EAEAEA]'></div>
            <div>
                <Link to="/login">LOGIN</Link>
            </div>
        </div>
       
    </div>
    <nav className='h-[40%] flex justify-evenly items-center'>
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