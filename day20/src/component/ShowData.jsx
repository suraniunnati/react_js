import React from 'react'
import { Link } from 'react-router-dom'

function ShowData({data}) {
    
  return (data.map((el)=>{
     return<Link to="/singleproduct" key={el.id}> <div id='main'>
        <img src={el.img} alt="" id='img'/>
        <h4>{el.title}</h4>
        <p>Price: ₹{el.price}</p>
     </div>
     </Link>
   })
  )
}

export default ShowData