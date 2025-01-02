import React, { useState } from 'react'
import "../App.css";

function Login() {
    let[state,setState]=useState({
        email:"",
        password:""
    })

    const handle=(e)=>{
        const{name,value}=e.target 
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/user`)
        .then((r)=>r.json())
        .then((res)=>{
            console.log(res)
            localStorage.setItem("login","true")    
            if(res.length>0){

                if(res[0].password==state.password){
                    alert("login successfully....")
                    localStorage.setItem("login",true)
                     
                }
                else{
                    alert("password is not found")
                }
                
            }
           else{
            alert("login unsuccessfully..")
           }
            console.log(res) 
            setState({
                email:"",
                password:""
            })
        })
        .catch((err)=>{
            console.log(err)
        })
      
    }

  return (
    <form action="" onSubmit={handleSubmit}>
         <h3>Login Form </h3>
        <input type="text" name='email' value={state.email} placeholder='Email' onChange={handle}/>
        <input type="text" name='password' value={state.password} placeholder='Password' onChange={handle}/>
        <input type="submit" />
    </form>
  )
}

export default Login