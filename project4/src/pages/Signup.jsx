import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    let[state,setState]=useState({
        username:"",
        email:"",
        password:""
    })

    const naviget=useNavigate()

    const handle=(e)=>{
        const{name,value}=e.target 
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/user`,{
            method:'POST',
            headers:{
                'content-type':'appliction/json'
            },
            body : JSON.stringify(state)
        })
        .then((r)=>r.json())
        .then((res)=>{
            console.log(res)
            naviget("/login")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <form action="" onSubmit={handleSubmit}>
         <h3>SignUP Form</h3>
        <input type="text" name='username' placeholder='username' onChange={handle}/>
        <input type="text" name='email' placeholder='Email' onChange={handle}/>
        <input type="text" name='password' placeholder='Password' onChange={handle}/>
        <input type="submit" />
    </form>
  )
}

export default Signup