import React from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/slices/cartSlice";

const Card = ({item}) => {
const dispatch = useDispatch()
const productImage = item?.images?.[0]




    return (
    <div>
      <div className="product-card">
        <div className="offer-badge">20% OFF</div>

        <img
          src={productImage}
          alt="Product Image"
          className="product-img"
        />

        <div className="product-info">
          <h2 className="product-title">{item?.title}</h2>
          <p className="product-desc">{item?.description}</p>

          <div className="price-section">
            <span className="new-price">₹{item?.price}</span>
            <span className="old-price">₹{item?.price}</span>
          </div>

          <button className="add-cart-btn "  onClick={()=>dispatch(addCartItems())}>Add to Cart</button>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
