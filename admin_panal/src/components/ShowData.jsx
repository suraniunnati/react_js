import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Product from '../pages/Product'
import { useState,useEffect } from 'react';

function ShowData() {
   const [state, setState] = useState("");
   let neviget=useNavigate()
 
   // Fetch users
   useEffect(() => {
     fetch("http://localhost:3000/product")
       .then((res) => res.json())
       .then(setState)
       .catch(console.error);
   }, []);

   const del = (id) => {
    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setState(state.filter((product) => product.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const edit=(id)=>{
    console.log(id)
    fetch(`http://localhost:3000/product/${id}`)
    .then((r)=>r.json())
    .then((res)=>{
        console.log(res)
        localStorage.setItem("editid",JSON.stringify(res))
    })
    .catch((err)=>{console.log(err)})
    neviget("/editProduct")

  }
    
  return <>
    <h3>Product List</h3>
    {state.length === 0 ? (
      <p>No products found</p>
    ) : (
    <table >
    <thead>
      <tr>
        <th>Title</th>
        <th>Product</th>
        <th>Price</th>
        <th>Deatle</th>
        <th>Remove</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {state.map((el, index) => (
        <tr key={index}>
          <td style={{width:"200px"}}>{el.title}</td>
          <td><img src={el.img} alt="" /></td>
          <td>₹{el.price}</td>
          <td style={{width:"350px"}}>{el.del}</td>
          <td style={{width:"100px"}}><button  onClick={() => del(el.id)}  id='delete'><i class="fa-solid fa-trash"></i> Delete</button></td>
          <td style={{width:"100px"}}><Link  to={`/editProduct/${el.id}`}><button id='edit'><i class="fa-solid fa-pen-to-square"></i> Edit</button></Link></td>
        </tr>
      ))}
    </tbody>
  </table>
)}
  </>
}

export default ShowData