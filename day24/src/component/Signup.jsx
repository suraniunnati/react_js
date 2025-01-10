import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
    let [state,setState]=useState({
        username:"",
        email:"",
        password:""
    })

    let [userErr,setuserErr]=useState(false)
    let [emailErr,setemailErr]=useState(false)
    let [passErr,setpassErr]=useState(false)

    const userRegex= /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/
    const emailRegex=/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
    const passRegex=/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/

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

         const handleblur=(e)=>{
            const{name,value}=e.target

            if(name=="username" && !userRegex.test(value)){
               setuserErr(true)
            }
            if(name=="email" && !emailRegex.test(value)){
                setemailErr(true)
            }
            if(name=="password" && !passRegex.test(value)){
                setpassErr(true)
            }
         }

         const handlefocus=(e)=>{
            const{name}=e.target
            if(name=="username"){
                setuserErr(false)
            }
            if(name=="email"){
                setemailErr(false)
            }
            if(name=="password"){
                setpassErr(false)
            }
         }

  return (
    <div>
       
        <form action="" onSubmit={handleSubmit}>
        <h3>signup</h3>
            <input type="text" placeholder='username' name='username' value={state.username} onChange={handle} onBlur={handleblur} onFocus={handlefocus}/>
            {userErr==true ?<p>Invalid username address. Please enter a valid username</p>:""}
            <input type="text" placeholder='email' name='email' value={state.email} onChange={handle} onBlur={handleblur} onFocus={handlefocus}/>
            {emailErr==true ?<p>Invalid email. Please enter a valid email</p>:""}
            <input type="text" placeholder='password' name='password' value={state.password} onChange={handle} onBlur={handleblur} onFocus={handlefocus}/>
            {passErr==true ?<p>Invalid password. Please enter a valid password</p>:""}
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup