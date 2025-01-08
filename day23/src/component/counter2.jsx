

import { useDispatch, useSelector } from "react-redux"
import {  DEC1, INC1 } from "../redux/actionType"

export const Counter2=()=>{
    const data = useSelector((store)=>store.counter2)
    console.log(data)
    const dispatch = useDispatch()
    return(
        <>
          <h4>---- squar counter ----</h4>
        <h3>counnter2 : {data}</h3>
        <button onClick={()=>dispatch({type:DEC1})} disabled={data <= 1 }>-/2</button>
        <button onClick={()=>dispatch({type:INC1})}>+*2</button>
        </>
    )
}