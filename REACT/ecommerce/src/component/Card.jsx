import { useState } from "react";
import "./Card.css"
export function Card({product, event}) {
    
  return (
    <div className="card">
      <div className="image-container">
      <img src={product.image} alt="" className="image"/>
      </div>
      <div className="content-container">
      <h2 className="title">{product.title}</h2>
      <p className="price">{product.price}</p>
      <button id={product.id} onClick={event} >Add to Cart</button>
      </div>
    </div>
  );
}