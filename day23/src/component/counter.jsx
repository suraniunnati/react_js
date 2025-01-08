import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "../redux/actionType"

export const Counter=()=>{
    const data = useSelector((store)=>store.counter1)
    console.log(data)
    const dispatch = useDispatch()
    return(
        <>
        <h4>---- +5 and -5 counter ----</h4>
        <h3>counnter1 : {data}</h3>
        <button onClick={()=>dispatch({type:DEC})} disabled={data <= 5}>-5</button>
        <button onClick={()=>dispatch({type:INC})}>+5</button>
        </>
    )
}