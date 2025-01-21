import axios from "axios"
import { error, loding, success } from "./actionType"


export const productData=(dispatch)=>{
    dispatch({type:loding})
    axios.get("https://dummyjson.com/products")
    .then((r)=>{
        // setState(r.data.products)
        console.log(r.data.products)
        dispatch({type:success, payload :r.data.products})
    })
    .catch((err)=>{
        dispatch({type:error})
    })
}