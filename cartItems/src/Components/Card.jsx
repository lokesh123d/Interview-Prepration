import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './card.css'

const Card = ({items , setitems , setcartItems ,cartItems}) => {
    useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setitems(data.products
      ));
  }, []);

function handleCart(id){
    const product = items.find((item) => item.id === id);
    if (product) {
      setcartItems([...cartItems, product]);
    }
}


  return (
    <div>
      <div className="container">
        {items.map((val) => {
          return (
            <div key={val.id} className="card">
              <img src={val.images} alt="" />
              <h5>{val.title}</h5>
              <span>{val.price}</span>
              <button onClick={()=>handleCart(val.id)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
