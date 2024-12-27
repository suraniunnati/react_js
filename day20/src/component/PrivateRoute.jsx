import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'

function PrivateRoute({Children}) {
  // var isLogin=localStorage.getItem("login")
  return (<>
   {localStorage.getItem("login") ? Children : <Navigate to={"/login"}/> }</>
      )
}

export default PrivateRoute