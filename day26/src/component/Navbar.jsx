import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">Form</Link>
          <Link to="/list">Productlist</Link>
    </div>
  )
}

export default Navbar