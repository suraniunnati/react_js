import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
    let [state,setState]=useState({
        username:"",
        email:"",
        password:""
    })
    const handle=(e)=>{
        const {name,value} = e.target 
        setState({...state,[name]:value}) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:3000/user`,state)
        console.log(state)

       setState({
            username:"",
            email:"",
            password:""
        })

        alert("data successfully add")
        

    }
  return (
    <div>
       
        <form action="" onSubmit={handleSubmit}>
        <h3>signup</h3>
            <input type="text" placeholder='username' name='username' value={state.username} onChange={handle}/>
            <input type="text" placeholder='email' name='email' value={state.email} onChange={handle}/>
            <input type="text" placeholder='password' name='password' value={state.password} onChange={handle}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup