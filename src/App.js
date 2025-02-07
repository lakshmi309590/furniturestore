
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/signup';
import { createContext, useState } from 'react';
import Login from './pages/login';
import Home from './pages/Home';
import { product } from './components/product';
import SofasArmchairs from './pages/Sofas&Armchairs';

export const myContext= createContext()

function App() {
  const [user,setUser]=useState([])
  const [sharedValue, setSharedValue]=useState(product)
  return (
    <BrowserRouter>
    <myContext.Provider value={{user,setUser,sharedValue, setSharedValue}}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/sofa' element={<SofasArmchairs/>}/>
      </Routes>
    </div>
    </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
