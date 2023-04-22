import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import CartContext from "../Context/CartContext"


const ProductList = () => {
   const {products , isLoading , handleAddToCart , handleAddToWish} = useContext(CartContext)

  return (
    <div className='App'>
      { isLoading ? <p>Loading .....</p> : products.map(product => (
        <div key = {product.id}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>Price : {product.price} INR </p>
         <Link><p>Visit item</p></Link>
         <button onClick = {() => handleAddToCart(product)}>Add to cart</button>
         <button onClick = {() => handleAddToWish(product)}>Add to WishList</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList