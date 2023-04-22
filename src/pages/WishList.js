import React from 'react'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'

const WishList = () => {
  const {wishItems , handleRemoveFromWishList} = useContext(CartContext)
  return (
    <div className='App'>
        <h2>Wish List</h2>
        <h2>Items : {wishItems.length}</h2>
        <h2>Apple iPhone 13 Pro Max</h2>
        <p>6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system</p>
        <p>Price : 1099 INR</p>
        <hr/>
         {wishItems.map(product => (
          <div key = {product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Price : {product.price}</p>
            <button onClick={() => handleRemoveFromWishList(product.id)}>Remove from wishlist</button>
          </div>
         ))}
    </div>
  )
}

export default WishList