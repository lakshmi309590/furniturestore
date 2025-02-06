
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/signup';
import { createContext, useState } from 'react';
import Login from './pages/login';
import Home from './pages/Home';

export const myContext= createContext()

function App() {
  const [user,setUser]=useState([])
  return (
    <BrowserRouter>
    <myContext.Provider value={{user,setUser}}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
