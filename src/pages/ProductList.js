import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import CartContext from "../Context/CartContext"


const ProductList = () => {
   const {products , isLoading , handleAddToCart} = useContext(CartContext)

  return (
    <div className='App'>
      { isLoading ? <p>Loading .....</p> : products.map(product => (
        <div key = {product.id}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>Price : {product.price} INR </p>
         <Link><p>Visit item</p></Link>
         <button onClick = {() => handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList