function ShowProduct(props) {
  return props.data.map((el) => {
    return (
      <div>
        <div>
          <img src={el.img} />
        </div>
        <div>
          <h3>Titlel: {el.name}</h3>
          <span>Price: {el.price}</span>
          <br />
          <span>category: {el.category}</span>
          <br />
          <span>Description: {el.des}</span>
        </div>
      </div>
    );
  });
}

export default ShowProduct;
