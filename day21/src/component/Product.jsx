import React, { useEffect, useState } from 'react'

function Product() {
    let [product, setproduct] = useState([])
    let [newproduct, setnewproduct] = useState([])
    let [sort, setsort] = useState("")
    let [fil, setfil] = useState("")
    let [search,setSearch]=useState("")

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((r) => r.json())
            .then((res) => {
                // console.log(res)
                setproduct(res)
                setnewproduct(res)
            })
            .catch((err) => { console.log(err) })
    }, [])

    useEffect(() => {
        let arr = [...product]
        if (sort == "htl") {
            arr = arr.sort((a, b) => {
                return b.price - a.price
            })
        }
        else if (sort == "lth") {
            arr = arr.sort((a, b) => {
                return a.price - b.price
            })
        }

        if(fil != ""){
            arr = arr.filter((el)=>{
                return el.category == fil
             })
          }

        if(search != ""){
            arr = arr.filter((el)=>{
             return el.title.toLowerCase().includes(search.toLowerCase())
            })
        }
        

        console.log(sort)
        console.log(fil)
        console.log(search)
        setnewproduct(arr)
    }, [sort, fil, search])

    return (
        <div>
            <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <select name="" id="" onChange={(e) => setsort(e.target.value)}>
                <option value="">select for sort</option>
                <option value="htl">high to low</option>
                <option value="lth">low to high</option>
            </select>

            <select name="" id="" onChange={(e) => setfil(e.target.value)}>
                <option value="">select for filter</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>
            {newproduct.map((el) => {
                return <div>
                    <img src={el.image} alt="" width={"150px"} />
                    <h3>{el.title}</h3>
                    <p>{el.price}</p>
                </div>
            })}
        </div>
    )
}

export default Product