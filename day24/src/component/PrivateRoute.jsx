import React from 'react'
import {  useSelector } from 'react-redux'
// import { success } from '../redux/actionType'

function PrivateRoute({Children}) {
    const data=useSelector((store)=>store.Login)
    // const dispatch=useDispatch()
    console.log(data)
  return data ? Children : <Navigator to="/login"/>
}

export default PrivateRoute