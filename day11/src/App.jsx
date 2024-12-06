import { useState } from 'react'
import './App.css'
import ProductForm from './component/productForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductForm/>
    </>
  )
}

export default App
