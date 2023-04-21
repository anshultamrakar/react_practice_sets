import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to = "/cart">My Cart</Link> 
        <br/>
        <Link to = "/wishlist">My wishList</Link>
        <br/>
        <Link to = "/about">About</Link>
    </nav>
  )
}

export default Navbar