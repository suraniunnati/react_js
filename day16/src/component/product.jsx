function Product(props) {
  return (
    <>
      {props.data.map((el) => {
        return (
          <div id="main">
            <div id="img">
              <img src={el.url} alt="" height={"100%"}/>
            </div>
            <div id="text">
              <h3>Title: {el.title}</h3>
              <p>price: {el.price}</p>
              <p>Des: {el.des}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Product;
