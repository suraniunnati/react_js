import React, { useState,useEffect } from 'react'
import ShowData from '../component/ShowData'

function Product() {
    let[state,setState]=useState({
        title:"",
        price:"",
        img:""
    })
    let[arr,setArr]=useState([])
    
    const handle=(e)=>{
        const{name,value}=e.target 
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/product`,{
            method:'POST',
            headers:{
                'content-type':'appliction/json'
            },
            body : JSON.stringify(state)
        })
        .then((r)=>r.json())
        .then((res)=>{
            setArr([...arr,res])
            console.log(res)
       
           
        })
        .catch((err)=>{
            console.log(err)
        })
        setState({
            title:"",
            price:"",
            img:""
        })
    }

    // useEffect(() => {
    //     fetch(`http://localhost:3000/product`)
    //         .then((r) => r.json())
    //         .then((res) => 
    //             {setArr(res)
    //             })
    //         .catch((err) => console.log(err));
    // }, []);

  
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
    <h3>Product Details Form</h3>
        <input type="text" name='title' value={state.title} placeholder='Title' onChange={handle}/>
        <input type="text" name='price' value={state.price} placeholder='Price' onChange={handle}/>
        <input type="text" name='img' value={state.img} placeholder='Image URL' onChange={handle}/>
        <input type="submit" />
    </form>

    <div id="show">
    
    <ShowData data={arr}></ShowData>
    </div>
  
    </>
  )
}

export default Product