import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <div id='aa'>
        <Link to="/">Form</Link>
          <Link to="/list">Productlist</Link>
    </div>
  )
}

export default Navbar