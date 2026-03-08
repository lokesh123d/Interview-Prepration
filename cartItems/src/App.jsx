import React from 'react'
import Card from './Components/Card'
import { useState } from 'react'
import Cart from './Components/Cart'

const App = () => {

  const [items, setitems] = useState([])
  const [cartItems, setcartItems] = useState([])
  return (
    <div>

<Cart cartItems={cartItems} setcartItems={setcartItems}/>
<Card setitems={setitems} items={items} setcartItems={setcartItems} cartItems={cartItems}/>

    </div>
  )
}

export default App