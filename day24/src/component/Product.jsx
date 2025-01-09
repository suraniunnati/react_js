import axios from 'axios'
import React, { useState } from 'react'

function Product() {
    let [state, setState] = useState({
        title: "",
        img: "",
        price: ""
    })
    const handle = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3000/product`, state)
        console.log(state)

        setState({
            title: "",
            img: "",
            price: ""
        })

        alert("product successfully add")


    }
    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <h3>product form</h3>
                <input type="text" placeholder='product name' name='title' value={state.username} onChange={handle} />
                <input type="text" placeholder='image URL' name='img' value={state.email} onChange={handle} />
                <input type="text" placeholder='product price' name='price' value={state.password} onChange={handle} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Product