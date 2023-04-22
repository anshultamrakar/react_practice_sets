import React from 'react'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'


const Cart = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='App'>
        <h2>My Cart</h2>
        <h2>Item : {cartItems.length} </h2>
        <h2>Apple MacBook Air</h2>
        <p>13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core GPU. Up to 18 hours of battery life.
        </p>
        <p>Price : 999 INR</p>
        <hr/>
        {cartItems.map(item => (
          <div key = {item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p> Price : {item.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Cart