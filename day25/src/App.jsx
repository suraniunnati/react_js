import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [state, setState]=useState(5)

  const cal=  useMemo(()=>{
    console.log(state)
    return state 
  },[state])


 const u=()=>{
   console.log(count);
   
 }

  return (
    <>
    <h1>calculate : {cal}</h1>
    <h1>{count}</h1>
      <button onClick={()=>setState(state+5)}>click</button>
      <button onClick={()=> u(setCount(count+1)) }>check</button>
    </>
  )
}

export default App
