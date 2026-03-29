import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItems,
  clearCartItems,
  removeCartItems,
} from "./redux/slices/cartSlice";
import Navbar from "./component/Navbar";
import Products from "./component/Products";

const App = () => {
  const productItems = useSelector((state) => state.product.items);
console.log(productItems);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <Products/>
      {/* <button class="add-cart-btn remove-btn" onClick={()=>dispatch(removeCartItems())}>Remove From Cart</button>
          <button class="add-cart-btn clear-btn" onClick={()=>dispatch(clearCartItems())}>Clear Cart</button> */}
    </div>
  );
};

export default App;
