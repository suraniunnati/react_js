import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <div id='nevbar'>
        <div>LOGO</div>
        <div id='nav'>
            <Link to={"/"}>ReservationForm</Link>
            <Link to={"/reservlist"}>ReservationList</Link>
            <Link to={"/roomlist"}>RoomList</Link>
            <Link to={"/roomdetails"}>RoomDetails</Link>
        </div>
    </div>
  )
}

export default Navbar