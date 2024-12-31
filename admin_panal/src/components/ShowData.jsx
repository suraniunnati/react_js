import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../pages/Product'

function ShowData({data,Delete}) {
    
  return <>
    <h3>Product List</h3>
    {data.length === 0 ? (
      <p>No users found</p>
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
      {data.map((el, index) => (
        <tr key={index}>
          <td style={{width:"200px"}}>{el.title}</td>
          <td><img src={el.img} alt="" /></td>
          <td>₹{el.price}</td>
          <td style={{width:"350px"}}>{el.del}</td>
          <td style={{width:"100px"}}><button  onClick={() => Delete(el.id)}  id='delete'><i class="fa-solid fa-trash"></i> Delete</button></td>
          <td style={{width:"100px"}}><button id='edit'><i class="fa-solid fa-pen-to-square"></i> Edit</button></td>
        </tr>
      ))}
    </tbody>
  </table>
)}
  </>
}

export default ShowData