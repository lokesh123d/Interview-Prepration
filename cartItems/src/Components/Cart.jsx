import React from "react";
import "./card.css";
import { useState ,useEffect} from "react";
const Cart = ({ cartItems, setcartItems }) => {
  let [totalAmount, settotalAmount] = useState(0);
    function removeCart(id) {
    let newItems = cartItems.filter((val) => {
      if (val.id != id) return val;
    });
    setcartItems(newItems);
  }
  useEffect(()=>{
cartItems.map((val)=>{
    totalAmount+=Number(val.price)
})
settotalAmount(totalAmount);
  },[cartItems ,setcartItems])
  return (
    <div>
      <h1>here is a cart section</h1>
      <h3>Total Amount:{totalAmount}</h3>
      <div className="cartContainer">
        {cartItems.map((val) => {
          return (
            <div key={val.id} className="cartCard">
              <h5>{val.title}</h5>
              <span>{val.price}</span>
              <span style={{margin:'20px '}}>Quantity:{}</span>
              <button onClick={() => removeCart(val.id)}>
                Remove From Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
