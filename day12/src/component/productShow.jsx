function FormShow(props){
    return(
        props.show.map((el)=>{
            return <div id="show">
                <h5>{el.id}</h5>
           <h5>Username: {el.username}</h5>
           <h5>Email: {el.email}</h5>
           <h5>Password: {el.password}</h5>
            </div>
        })
        
    )
}

export default FormShow