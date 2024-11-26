import "./App.css";
import { useState } from "react";
function Account() {
  let [state, setState] = useState("hide");
  let [username, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [arr, setarr] = useState([]);

  function submitClick() {
    let obj = {
      username,
      email,
      password,
    };

    setarr([...arr, obj]);

    console.log(arr);
  }

  return (
    <div className="main">
      {state == "hide" ? (
        <div>
          <h1>LOGIN</h1>
          <br />
          <input type="text" placeholder="email" />
          <br />
        
          <input type="text" placeholder="password" />
          <br /> 
          <button>login</button>
          <br />
         
          <span onClick={() => setState("show")} id="add">Need an account ? SIGN UP</span>
        </div>
      ) : (
        <div className="main"> 
          <h1>SIGN UP</h1>
          <br />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br /> 
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
    
          <button onClick={submitClick}>submit</button>
          <br />
      
          <span onClick={() => setState("hide")} id="add">Already have an account</span>
         
         
        </div>
      )}
    </div>
  );
}
export default Account;
