import './App.css';
import {component} from 'react';

class Counter1 extends component{
  constructor(props){
    super(props)
      this.state={
        nim:0
      }
  }

  des=()=>{
    this.setState({num:this.state.num-1})
  }
  inc=()=>{
    this.setState({num:this.state.num+1})
  }

  render(){
    return <div>
      <h1>{this.state.num}</h1>
      <button onclick={this.inc}>+</button>
      <button onclick={this.des}>-</button>
    </div>
  }
}


export default App;
