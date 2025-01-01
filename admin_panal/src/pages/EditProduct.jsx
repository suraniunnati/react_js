import React, { useState,useEffect } from 'react'

function EditProduct() {    
    const editId = localStorage.getItem("editid");
    let[product,setProduct]=useState()
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
  return (<>
    <div>EditProduct</div>
    <form action="">
        <input type="text"  placeholder='Title'/>
        <input type="text" placeholder='Price' />
        <input type="text"  placeholder='ImageURL'/>
        <input type="text"  placeholder='Deatile'/>
        <input type="submit" />
    </form>
    </>
  )
}

export default EditProduct