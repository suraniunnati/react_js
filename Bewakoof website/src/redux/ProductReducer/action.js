import axios from "axios"
import { LODAING, SUCCESS } from "./ActionType"

export const fatchData=(dispatch)=>{
    dispatch({type:LODAING})
    axios.get(`http://localhost:3000/product`)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:SUCCESS,payload:res.data})
    })

}