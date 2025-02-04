import axios from "axios";
import { error, loding, success } from "./actionType";

export const addData=(dispatch)=>(state)=>{
    axios.post(`http://localhost:3000/data`, state)
    dispatch({type:success})
}
export const fetchRooms = (dispatch) => {
   dispatch({ type: loding });
        axios.get("http://localhost:3000/rooms")
            .then((res) => {
                console.log(res.data);
                dispatch({ type:success, payload: res.data });
            })
            .catch((err) => {
                  console.log(err)
                dispatch({ type: error });
            });
    
};
