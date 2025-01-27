import React, { useEffect } from 'react'
import { deleteData, getData , editData} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProductList() {
  const dispatch =useDispatch()
  const data=useSelector(store=>store)
  console.log(data);
  const naviget = useNavigate()
  

    useEffect(()=>{
      dispatch(getData)
    },[])

  const handleDelete=(id)=>{
      dispatch(deleteData)(id)
  }
  const handleEdit=(id)=>{
   naviget(`/edit/${id}`)
    
  }  
  return (
    <div>
      <h2>ProductList</h2>
     { data.product.map((el,index)=>{
        return  <div key={index}>
          <img src={el.img} alt="" />
          <h3>{el.title}</h3>
          <p>{el.price}</p>
          <button onClick={()=>handleEdit(el.id)}>Edit</button>
          <button onClick={()=>handleDelete(el.id)}>Delete</button>
        </div>
      })}
    
    </div>
  )
}

export default ProductList