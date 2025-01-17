import axios from "axios"
import { error } from "./actionType"


export const LoginData=(dispatch,navigate,email)=>{
    dispatch({ type: loding })
    axios.get(`http://localhost:3000/user?email=${email}`)
        .then((res) => {
            console.log(res.data)

            dispatch({ type: success, payload: res.data[0].username })
            navigate(to = "/home")

        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: error })
        })
}