import { useEffect, useState } from "react";
import Product from "./product";

function ProductForm() {
  let [state, setState] = useState({
    title: "",
    price: "",
    des: "",
    url: "",
  });
  let [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  const handle = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, state]);
    setState({
      title: "",
      price: "",
      des: "",
      url: "",
    });
  };
  console.log(arr);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>PRODUCT FROM</h2>
        <input
          type="text"
          name="title"
          value={state.title}
          placeholder="Title"
          onChange={handle}
        />
        <br />
        <input
          type="text"
          name="price"
          value={state.price}
          placeholder="Price"
          onChange={handle}
        />
        <br />
        <input
          type="text"
          name="des"
          value={state.des}
          placeholder="Description"
          onChange={handle}
        />
        <br />
        <input
          type="text"
          name="url"
          value={state.url}
          placeholder="image URL"
          onChange={handle}
        />
        <br />
        <input type="submit" id="submit"/>
      </form>
        <div id="product">
        <Product data={arr} />
        </div>
     
    </div>
  );
}

export default ProductForm;
