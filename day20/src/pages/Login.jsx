import React from 'react'
import { useState } from 'react'
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
            fetch(`http://localhost:3000/user?email=${state.email}`)
            .then((r)=>r.json())
            .then((res)=>{
                if(res.length>0){

                    if(res[0].password==state.password){
                        alert("login success")
                        localStorage.setItem("login",true) 
                    }
                    else{
                        alert("password is not....")
                    }
                    
                }
               else{
                alert("nooo")
               }
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

  return (
    <form action="" onSubmit={handleSubmit}>
    <h3>Login Form</h3>
    <input type="text" name='email' placeholder='Email' onChange={handle}/>
    <input type="text" name='password' placeholder='Password' onChange={handle}/>
    <input type="submit" />
</form>
  )
}

export default Login