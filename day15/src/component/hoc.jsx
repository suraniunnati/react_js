// import Spinner from "react-bootstrap/Spinner";

function BasicExample() {
  return (
      <span >Loading...</span>
   
  );
}

const ProductHoc = (Product) => {
  return function ({ ...props }) {
    if (props.data) {
      return <BasicExample />;
    }
    return <Product {...props} />;
  };
};

function ProductList({ arr }) {
  return arr.map((el) => {
    return (
      <div>
        <img src={el.image} alt="" width={"200px"} />
        <h3>{el.title}</h3>
        <p>{el.price}</p>
        <p>{el.category}</p>
      </div>
    );
  });
}

export const List = ProductHoc(ProductList);
// export default ProductList;
