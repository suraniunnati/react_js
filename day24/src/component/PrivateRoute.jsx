import React from 'react'
import {  useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


function PrivateRoute({Children}) {
    const data=useSelector((state)=>state.Login)
   
    console.log(data)
  return (data ? Children : <Navigate to="/login"/>)
}

export default PrivateRoute