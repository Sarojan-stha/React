import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);

  async function getData(URL) {
    try {
      const {
        data: { products },
      } = await axios.get(URL);
      console.log(products);
      setProduct(products);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    const URL = `https://dummyjson.com/products`;
    getData(URL);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      {product &&
        product.length > 0 &&
        product.map((product) => (
          <p>
            <strong>NAME:</strong>
            {product.title} <strong>PRICE:</strong>${product.price}
          </p>
        ))}
    </>
  );
}
