import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counters() {
    const select=useSelector((st)=>st.counter2)
    const dispatch=useDispatch()
  return (
    <div><h2>Counter1 : {select}</h2>
    <button onClick={()=>{dispatch({type:"DEC1"})}} disabled={select <= 0}>-</button>
    <button onClick={()=>{dispatch({type:"INC1"})}}>+</button>
    </div>
  )
}

export default Counters