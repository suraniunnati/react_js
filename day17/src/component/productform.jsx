import { useEffect, useState } from "react"
import ShowProduct from "./showProduct"
function ProductForm(){
    let[state,setState]=useState({
        title:"",
        price:"",
        img:""
    })
    let[arr,setArr]=useState(JSON.parse(localStorage.getItem("data"))|| [] )

    const handle=(e)=>{
        let{name,value}=e.target
        setState({...state,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setArr([...arr,state])
        console.log(arr)
    }

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

    return <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title" onChange={handle}/>
            <input type="text" name="price" placeholder="price" onChange={handle}/>
            <input type="text" name="img" placeholder="img URL" onChange={handle}/>
            <input type="submit" />
        </form>
        <div id="show">
        <ShowProduct pro={arr}/>
        </div>
    </>
}

export default ProductForm