import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <nav>
        <Link to="./home">home</Link>
        <Link to="./signup">signup</Link>
        <Link to="./login">login</Link>
        <Link to="./product">product</Link>
    </nav>
  )
}

export default Navbar