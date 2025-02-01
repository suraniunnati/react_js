import axios from "axios"
import { LODAING, SUCCESS, SUCCESSsingle } from "./ActionType"
import { useParams } from "react-router-dom"

export const fatchData=(dispatch)=>{
    dispatch({type:LODAING})
    axios.get(`http://localhost:3000/product`)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:SUCCESS,payload:res.data})
    })

}

export const singleData=(dispatch,id)=>{
    // dispatch({type:LODAING})

    // const {id} = useParams()
    // console.log(id)
    axios.get(`http://localhost:3000/product/${id}`)
    .then((Res)=>{
        console.log(Res.data)
        dispatch({type:SUCCESSsingle,payload:Res.data})
    })
}