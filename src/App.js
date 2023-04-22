import './App.css';
import {Route, Routes} from "react-router-dom"
import ProductList from './pages/ProductList';
import Navbar from './pages/Navbar';
import WishList from './pages/WishList';
import About from './pages/About';
import Cart from './pages/Cart';
import Missing from "./pages/Missing"
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className = "App">
      <h1>Product Listing page</h1>
      <Navbar/>
      <CartProvider>
        <Routes>
        <Route path = "/" element = {<ProductList />}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/wishlist" element = {<WishList/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "*" element = {<Missing/>}/>
      </Routes>
      </CartProvider>
   
    </div>
  );
}

export default App;
