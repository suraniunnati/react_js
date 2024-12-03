import { useState,useEffect } from "react";
import Productlist from "./productlist";

function Product() {
  let [arr, setarr] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((r) => r.json())
      .then((res) => {
        setarr(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="grid grid-cols-5 gap-12 p-10">
      {arr.map((el) => {
        return (
         <Productlist key={el.id} data={el}/>
        );
      })}
    </div>
  );
}

export default Product;
