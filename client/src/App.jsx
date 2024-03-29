import { useState } from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Product from './component/Product'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import Signin from './component/Signin'
import Login from './component/Login'
import Order from './component/Order'
 
function App() {
 

  return (
    <BrowserRouter>
    <div>
       <Navbar/>
      <Routes>
        <Route path='/home' element= {<Product/>}></Route>
        <Route path='/cart' element= {<Cart/>}></Route>
        <Route path='/order' element= {<Order/>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element = {<Signin/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App
