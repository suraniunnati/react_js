


import { useDispatch, useSelector } from "react-redux"
import { DEC2, INC2 } from "../redux/actionType"
import { useState } from "react"

export const Counter3 = () => {
    const data = useSelector((store) => store.counter3)
    console.log(data)
    const dispatch = useDispatch()

    const [state, setState] = useState("")

  



    const handle = (e) => {
        const { name, value } = e.target
        setState(value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
        dispatch({ type: INC2, payload: state })

        
        
        

    }
    return (
        <>
              <h4>---- user like *value counter ----</h4>
            <h3>counnter3 : {data}</h3>
            <form action="" onSubmit={handleSubmit}>
                <input type="number" onChange={handle} />
                <input type="submit" />
            </form>
            {/* <button onClick={() => dispatch({ type: DEC2 })} disabled={data < 0}>-</button> */}
            {/* <button onClick={() => }>+</button> */}
        </>
    )
}