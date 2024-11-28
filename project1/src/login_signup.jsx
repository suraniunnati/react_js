import './App.css';
import { useState } from "react"

function Account(){
    let [state,setState]=useState("hide");
    let [username,setname] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [loginEmail,setloginEmail]= useState("");
    let [loginPassword,setloginPassword] =useState("");
    let [arr,setarr]=useState([])

    
  function submitClick() {
    let obj = {
      username,
      email,
      password,
    };

    setarr([...arr,obj]);
    alert("Add Successful")
    setname("")
    setEmail("")
    setPassword("")
    console.log(arr);
  }

  
  function loginClick(){
    let a=arr.filter((el)=>{
      if(el.email==loginEmail && el.password==loginPassword){
          return el;
      }
     
    })
    if(a.length > 0 ){
        alert("login successful")
    }
    else{
        alert("Data is not match")
    }
    setloginEmail("")
    setloginPassword("")
  

  }


    return (
        <div>
       {state=="hide" ?  (<div className='main'>
                <h1>LOGIN</h1>
                <input type="text" value={loginEmail} placeholder="email" onChange={(e)=>{setloginEmail(e.target.value)}}/><br/>
                <input type="password" value={loginPassword} placeholder="password" onChange={(e)=>{setloginPassword(e.target.value)}}/><br/>
                <button onClick={loginClick}>login</button><br/>
                <span onClick={() => setState("show")}>Creat Account first !</span>
            </div>)
:( <div className='main'>
<h1>SIGN UP</h1>
<input type="text" value={username}  placeholder="userame"  onChange={(e) => { setname(e.target.value);}}/><br/>
<input type="text" value={email} placeholder="email"  onChange={(e)=>{setEmail(e.target.value)}}/><br/>
<input type="password" value={password} placeholder="password"  onChange={(e)=>{setPassword(e.target.value)}}/><br/>
<button  onClick={submitClick}>signup</button><br/>
<span onClick={() => setState("hide")}>Already Account ? login</span>

</div>)}
       
        </div>
    )
}

export default Account