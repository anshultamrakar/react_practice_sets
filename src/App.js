
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
    <h1>Welcome to react router </h1>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/products" element = {<Products/>}/>
    </Routes>
    </div>
  );
}

export default App;
