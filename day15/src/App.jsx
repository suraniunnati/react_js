import { useState, useEffect } from "react";
import "./App.css";
// import ProductList from "./component.jsx/hoc";
import { List } from "./component/hoc";

function App() {
  const [arr, setarr] = useState([]);
  const [state, setState] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((r) => r.json())
      .then((res) => {
        setarr(res);
        setState(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div id="product">
      <List arr={arr} data={state} />
      </div>
      {/* <ProductList arr={arr} /> */}
    </>
  );
}

export default App;
