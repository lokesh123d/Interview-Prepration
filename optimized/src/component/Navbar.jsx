import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
   const cartValue = useSelector(state=>state.cart.value)
  return (
     <nav className="navbar">
    <div className="logo">MyShop</div>

    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <div className="cart">
      <i className="fa fa-shopping-cart">Cart</i>
      <span className="cart-count">{cartValue}</span>
    </div>
  </nav>
  )
}

export default Navbar