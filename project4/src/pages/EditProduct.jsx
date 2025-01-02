import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
  const {id} = useParams()
  console.log(id)
  let [product, setProduct] = useState({
    title: "",
    price: "",
    img: "",
    del: ""
  })

  const navigate=useNavigate()

  const handle = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  
  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((r) => r.json())
      .then((res) => {
        console.log(res)
        setProduct(res)
      })
      .catch((err) => { console.log(err) })
  }, [])



  const handleEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/product/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'appliction/json'
      },
      body: JSON.stringify(product)
    })
      .then((r) => r.json())
      .then((res) => {
        console.log(res)
        navigate("/product/list")
      })
      .catch((err) => { console.log(err) })

  };


  return (<>
    <div>EditProduct</div>
    <form action="" onSubmit={handleEdit}>
      <input type="text" value={product.title} placeholder='Title' name='title' onChange={handle} />
      <input type="text" value={product.price} placeholder='Price' name='price' onChange={handle} />
      <input type="text" value={product.img} placeholder='ImageURL' name='img' onChange={handle} />
      <input type="text" value={product.del} placeholder='Deatile' name='del' onChange={handle} />
      <button id='editdata'>Edit data</button>
    </form>
  </>
  )
}

export default EditProduct