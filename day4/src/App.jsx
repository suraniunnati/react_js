import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  let[state,setState]=useState(0) 
  function inc(){
    setState(state+1)
  }
  function des(){
    setState(state-1)
    if(state <= 0 ){
      setState(0) 
    }
  }
  function restart(){
    setState(state=0)
  }
  return (
    <div className="App">
      <p>{state}</p>
      <div className='count'>
      <h1>Counter</h1>
      <div className='btn'>
      <button onClick={des} >-</button>
      <Counter a={state}/>
      <button onClick={inc}>+</button>
      
      </div>
      <button className='restart' onClick={restart}>ReStart</button>
      </div>
    </div>
  );
}

export default App;
