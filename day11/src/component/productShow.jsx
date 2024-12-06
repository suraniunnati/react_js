function ProductShow(props){
    return(
        props.show.map((el)=>{
            return <div id="product">
            <img src={el.img} alt="" />
            <h2>{el.title}</h2>
            <p>{el.price}</p>
            </div>
        })
        
    )
}

export default ProductShow