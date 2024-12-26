function ShowProduct(props){
    return<>
   { props.pro.map((el)=>{
        return <div>
            <img src={el.img} alt="" />
            <h3>{el.title}</h3>
            <p>{el.price}</p>
        </div>
    })}
    </>
}

export default ShowProduct