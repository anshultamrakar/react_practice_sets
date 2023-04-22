import { createContext } from "react";
import { fakeFetch } from "../api/fakefetch";
import {useState , useEffect} from "react"

const CartContext = createContext({})

export const CartProvider = ({children}) => {

    const [products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [cartItems , setCartItems] = useState([])
  
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


 return(
    <CartContext.Provider value = {{
        products , isLoading , handleAddToCart , cartItems , setCartItems
        }}>
       {children}
    </CartContext.Provider>
 )
}

export default CartContext