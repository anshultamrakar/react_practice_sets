import React from 'react'
import {Link} from "react-router-dom"


const ProductList = ({products , isLoading}) => {
   

  return (
    <div className='App'>
      { isLoading ? <p>Loading .....</p> : products.map(({id , name , description , price , quantity , category, brand}) => (
        <div key = {id}>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Price : {price} INR </p>
         <Link><p>Visit item</p></Link>
        </div>
      ))}
    </div>
  )
}

export default ProductList