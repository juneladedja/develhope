import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./Card";
import "./Homepage.css";
export function Homepage() {
  const [productArr, setProductArr] = useState([]);
  const [chart, setchart] = useState([]);

  async function fetchProduct() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const products = await res.json();
    setProductArr(products);
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  function handleChart(product) {
    const isContained = chart.find((item) => item.id == product.id);
    if (isContained) {
      setchart(
        chart.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } : item;
        })
      );
    } else {
      setchart([...chart, { ...product, quantity: 1 }])
    }
  }
  useEffect(() => {
    console.log(chart);
  }, [chart]);
  productArr.length > 0 && console.log(productArr);
  return (
    <>
      <h1>Ecommerce</h1>
      <div className="card-container">
        {productArr.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              event={() => {
                handleChart(product);
              }}
            />
          );
        })}

        {chart.map((chart) => {
          return (
            <>
            <p>{chart.title} </p>
          <p>{chart.quantity}</p>
            </>
          
          )
        })}
      </div>
    </>
  );
}