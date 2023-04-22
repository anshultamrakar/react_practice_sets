import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import CartContext from "../Context/CartContext"


const ProductList = () => {
   const {products , isLoading , handleAddToCart} = useContext(CartContext)

  return (
    <div className='App'>
      { isLoading ? <p>Loading .....</p> : products.map(({id , name , description , price }) => (
        <div key = {id}>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Price : {price} INR </p>
         <Link><p>Visit item</p></Link>
         <button onClick = {() => handleAddToCart(id)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList