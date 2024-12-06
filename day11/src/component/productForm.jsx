import { useRef, useState } from "react"
import ProductShow from "./productShow"

function ProductForm(){
    let [state,setState]=useState([])
    let data =useRef(null)
    let data1 =useRef(null)
    let data2 =useRef(null)
    
  
    const SubmitClick=(e)=>{
        e.preventDefault()
        console.log(data.current.value) 

        
    let obj={
        title:data.current.value,
        img:data1.current.value,
        price:data2.current.value,
    }
    console.log(obj)

    setState([...state,obj])
    console.log(state)

    data.current.value = "";
        data1.current.value = "";
        data2.current.value = "";
      
    }
    return(
        <>
        <form action="" onSubmit={SubmitClick}>
            <h2>PRODUCT FORM</h2>
            <input type="text"  ref={data} placeholder="Title"/>
            <input type="text" ref={data1} placeholder="Image URL"/>
            <input type="text"  ref={data2} placeholder="Price"/>
            <input type="submit" id="submit" /> 
        </form>
        <div id="showpage">
            <ProductShow show={state}/>
        </div>
        </>
    )
}

export default ProductForm