import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



function Counter() {
    const select=useSelector((state)=>state.counter1)
    const dispatch=useDispatch()
  return (
    <div>
         <h3>Counter : {select}</h3>
         <button onClick={()=>{dispatch({type:"DEC"})}}>-</button>
         <button onClick={()=>{dispatch({type:"INC"})}}>+</button>
    </div>
  )
}

export default Counter