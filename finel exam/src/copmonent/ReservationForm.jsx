import axios from 'axios'
import React, { useState } from 'react'

function ReservationForm() {



    let [state,setState]=useState({
        name:"",
        email:"",
        phone:"",
        chackin:"",
        chackout:""
    })

    console.log(state)
    
    const handle=(e)=>{
        const {name,value}=e.target 
        setState({...state,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:3000/data`, state)
        console.log(state)

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' onChange={handle} name='name'/>
            <input type="text" placeholder='Email' onChange={handle} name='email'/>
            <input type="text" placeholder='Phone'  onChange={handle} name='phone'/>
            <label htmlFor="">Chack in</label>
            <input type="date"  onChange={handle} name='chackin'/>
            <label htmlFor="">Chack out</label>
            <input type="date"  onChange={handle} name='chackout'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ReservationForm