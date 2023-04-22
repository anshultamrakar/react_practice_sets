import { createContext } from "react";
import { fakeFetch } from "../api/fakefetch";
import {useState , useEffect} from "react"

const CartContext = createContext({})

export const CartProvider = ({children}) => {

    const [products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [cartItems , setCartItems] = useState([])
    const [wishItems , setWishItems] = useState([])
  
    const getData = async() => {
        try{
         const {data , status } = await fakeFetch("https://example.com/api/products")
         if(status === 200){
            setProducts(data.products)
            setIsLoading(false)
         }
        }catch(err){
            console.error(err)
        }
    }
  
    useEffect(() => {
      getData()
    },[])
  
  
    const handleAddToCart = (product) => {
      const cartlists = [...cartItems , product]
      setCartItems(cartlists)
    }

    const handleAddToWish = (product) => {
        const wishlists = [...wishItems , product]
        setWishItems(wishlists)
      }

    const handleRemoveFromCart = (id) => {
        const filterCart = cartItems.filter(product => product.id !==id )
        setCartItems(filterCart)
    }

    const handleRemoveFromWishList = (id) => {
        const filterWish = wishItems.filter(product => product.id !==id )
        setWishItems(filterWish)
    }


 return(
    <CartContext.Provider value = {{
        products , isLoading , handleAddToCart , cartItems , 
        setCartItems , handleRemoveFromCart , wishItems , handleAddToWish , handleRemoveFromWishList
        }}>
       {children}
    </CartContext.Provider>
 )
}

export default CartContext