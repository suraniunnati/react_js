
import './App.css'
import { googleAuth } from './firebase/fire'

function App() {
  const handle=()=>{
    googleAuth()
  }

  return (
    <>
     <button onClick={handle}>Google</button>
    </>
  )
}

export default App
