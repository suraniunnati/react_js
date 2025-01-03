import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {    
    const {id}=useParams()
    console.log(id)
    let[product,setProduct]=useState({
      title:"",
      price:"",
      img:"",
      del:""
    })
    const navigat=useNavigate()
    const handle=(e)=>{
      const{name,value}=e.target 
      setProduct({...product,[name]:value})
    }

   
    useEffect(() => {
      fetch(`http://localhost:3000/product/${id}`)
        .then((r) => r.json())
        .then((res) => {
          setProduct(res); 
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }, []);

  
    const handleEdit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/product/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      })
      .then((r)=>r.json())
      .then((res) =>
        { navigat("/product/list")})
        .catch(console.error);
    };


  return (<>
    <div>EditProduct</div>
    <form action="" onSubmit={handleEdit} >
        <input type="text" value={product.title}   placeholder='Title' name='title' onChange={handle}/>
        <input type="text" value={product.price}  placeholder='Price'  name='price' onChange={handle}/>
        <input type="text" value={product.img} placeholder='ImageURL' name='img' onChange={handle}/>
        <input type="text" value={product.del}  placeholder='Deatile' name='del' onChange={handle}/>
        <input type="submit" />
    </form>
    </>
  )
}

export default EditProduct