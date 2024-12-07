import { useState } from "react"
import FormShow from "./productShow"
function Form(){
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
        let {name,value} = e.target

        setState({...state,[name]:value})
    }
    let[arr,setarr]=useState([])

    const submitClick=(e)=>{
        e.preventDefault()
        setarr([...arr,state])
        console.log(arr)

        setState({
            username:"",
            email:"",
            password:""
        })

        if(userErr==false && emailErr==false && passErr==false){
            alert("form submit successfully")
        }
        else{
            alert(" place enter valid data")
        }
    }

    const blurClick=(e)=>{
        let {name} = e.target
        const value = state[name];
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

    const focusClick=(e)=>{
        let {name} = e.target
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

    return<div id="main">
    <div id="main1">
    <form action="" onSubmit={submitClick}>
        <h2>LOGIN FORM</h2>
        <input type="text" placeholder="UserName" name="username" value={state.username} onChange={handle} onBlur={blurClick} onFocus={focusClick}/><br/>
        {userErr==true ?<p>Invalid username address. Please enter a valid username</p>:""}
        <input type="text" placeholder="Email" name="email" value={state.email} onChange={handle} onBlur={blurClick} onFocus={focusClick}/><br/>
        {emailErr==true ?<p>Invalid email address. Please enter a valid email.</p>:""}
        <input type="text" placeholder="Password" name="password" value={state.password} onChange={handle} onBlur={blurClick} onFocus={focusClick}/><br/><br/>
        {passErr==true ?<p>Please enter atleast 8 charatcer with number, symbol, small and  capital letter.</p>:""}
        <h5><img src="https://d29fhpw069ctt2.cloudfront.net/clipart/89484/preview/checkbox_unchecked_preview_48d2.png" alt="" />Forget password ?</h5>
        <input type="submit" id="submit"/>
        <span>Now a Member ? Signup</span>
    </form>
    </div>
    <div id="main2">
        <FormShow show={arr}/>
    </div>
    </div>
}

export default Form