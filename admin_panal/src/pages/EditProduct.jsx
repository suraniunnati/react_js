import React, { useState,useEffect } from 'react'

function EditProduct() {    
    const editId = localStorage.getItem("editid");
    let[product,setProduct]=useState({
      title:"",
      price:"",
      img:"",
      del:""
    })
   
    useEffect(() => {
      fetch(`http://localhost:3000/product/${editId}`)
        .then((r) => r.json())
        .then((res) => {
          setProduct(res); // Set fetched data to the product state
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }, [editId]);

    const handle=(e)=>{
      const{name,value}=e.target 
      setProduct({...product,[name]:value})
    }

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   fetch(`http://localhost:3000/product/${editId}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(product),
    //   })
    //     .then(() => (window.location.href = "/"))
    //     .catch(console.error);
    // };


  return (<>
    <div>EditProduct</div>
    <form action="" >
        <input type="text" value={product.title}   placeholder='Title' name='title' onChange={handle}/>
        <input type="text"  placeholder='Price'  name='price' onChange={handle}/>
        <input type="text"  placeholder='ImageURL' name='img' onChange={handle}/>
        <input type="text"   placeholder='Deatile' name='del' onChange={handle}/>
        <input type="submit" />
    </form>
    </>
  )
}

export default EditProduct