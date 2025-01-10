import React from 'react'
import {  useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


function PrivateRoute({children}) {
    const data=useSelector((state)=>state.Login)
    console.log(data);

  return (data ? children : <Navigate to="/login"/>)
}

export default PrivateRoute