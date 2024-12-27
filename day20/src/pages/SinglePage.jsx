import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePage() {
    let {id}=useParams()
    // const [product, setProduct] = useState(null); 
    console.log(id)

    // useEffect(()=>{
    //     fetch(`http://localhost:3000/product`)
    //     .then((r)=>r.json())
    //     .then((res)=>{
    //       console.log(res)
    //       setProduct(res)
    //     })
    //     .catch((err)=>{
    //       console.log(err)
    //     })
    // },[])
  return (
    <div>SinglePage</div>
  )
}

export default SinglePage