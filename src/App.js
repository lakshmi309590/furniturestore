
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/signup';
import { createContext, useState } from 'react';
import Login from './pages/login';
import Home from './pages/Home';
import { product } from './components/product';
import SofasArmchairs from './pages/Sofas&Armchairs';
import Tables from './pages/tables';
import Bed from './pages/Bed';
import Lamp from './pages/Lamp';
import Decore from './pages/Decore';
import Wishlist from './pages/Wishlist';
import Cart from './pages/cart/cart';

export const myContext= createContext()

function App() {
  const [user,setUser]=useState([])
  const [sharedValue, setSharedValue]=useState(product)
  const [wishlist,setWishlist]=useState([])
  const [cartItems,setCartItems]=useState([])
  return (
    <BrowserRouter>
    <myContext.Provider value={{user,setUser,sharedValue, setSharedValue,wishlist,setWishlist,cartItems,setCartItems}}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/sofa' element={<SofasArmchairs/>}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/bed' element={<Bed/>}/>
        <Route path='/lamp' element={<Lamp/>}/>
        <Route path='/decore' element={<Decore/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
