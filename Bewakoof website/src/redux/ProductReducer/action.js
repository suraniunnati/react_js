import axios from "axios"
import { LODAING, SUCCESS, SUCCESScart, SUCCESSsingle } from "./ActionType"

export const fatchData=(dispatch)=>{
    dispatch({type:LODAING})
    axios.get(`http://localhost:3000/product`)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:SUCCESS,payload:res.data})
    })

}

export const singleData = (dispatch, id) => {
    axios.get(`http://localhost:3000/product/${id}`)
    .then((Res) => {
        console.log("Fetched Single Product:", Res.data);
        dispatch({ type: SUCCESSsingle, payload: Res.data });
    })
    .catch((error) => {
        console.error("Error fetching single product:", error);
    });
};


export const addToCart=(dispatch,product)=>{
   
        axios.post('http://localhost:3000/Cart',product)
        .then((Res) => {
        dispatch({ type: SUCCESScart, payload: Res.data });
    alert("data add to your bag..")
})
    
}