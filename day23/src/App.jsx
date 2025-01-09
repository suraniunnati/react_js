import { useState } from 'react'

import './App.css'
import { Counter } from './component/counter'
import { Counter2 } from './component/counter2'
import { Counter3 } from './component/counter3'

function App() {
 

  return (
    <div className='main'>
   <Counter/>
   <Counter2/>
   <Counter3/>
    </div>
  )
}

export default App
