import './App.css';
import {Route, Routes} from "react-router-dom"
import {useState , useEffect} from "react"
import ProductList from './pages/ProductList';
import Navbar from './pages/Navbar';
import WishList from './pages/WishList';
import About from './pages/About';
import { fakeFetch } from './api/fakefetch';
import Cart from './pages/Cart';
import Missing from "./pages/Missing"

function App() {
 
  const [products , setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(true)

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

  return (
    <div className = "App">
      <h1>Product Listing page</h1>
      <Navbar/>
    <Routes>
      <Route path = "/" element = {<ProductList products = {products} isLoading  = {isLoading}/>}/> 
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/wishlist" element = {<WishList/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "*" element = {<Missing/>}/>
    </Routes>
    </div>
  );
}

export default App;
