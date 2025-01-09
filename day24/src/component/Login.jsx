import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { error, loding, success } from '../redux/actionType'

function Login() {
     let [state,setState]=useState({
            email:"",
            password:""
        })
        const handle=(e)=>{
            const {name,value} = e.target 
            setState({...state,[name]:value}) 
        }

        const data = useSelector((store)=>store)
        console.log(data)
        const dispatch = useDispatch()

        const handleSubmit=(e)=>{
            e.preventDefault()
            dispatch({type:loding})
            axios.get(`http://localhost:3000/user?email=${state.email}`)
            .then((res)=>{
                console.log(res.data)
                
                dispatch({type:success,payload:res.data[0].username})
            })
            .catch((err)=>{
                console.log(err)
                dispatch({type:error})
            })

            setState({
                email:"",
                password:""
            })
        }

  return (
    <div>
       
         <form action="" onSubmit={handleSubmit}>
         <h3>Login</h3>
            <input type="text" placeholder='email' name='email' value={state.email} onChange={handle}/>
            <input type="text" placeholder='password' name='password' value={state.password} onChange={handle}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login