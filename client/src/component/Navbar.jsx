import React, { useEffect } from 'react'
import { CiMobile3 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import{useDispatch, useSelector} from "react-redux"
import {getCartTotal} from "../features/cartsSlice"

function Navbar() {
  const {cart,totalQuantity} = useSelector(state => state.allCart)
  const  dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal());
  },[cart])

  return (
    <nav className='navbar'>
      <div className='icon'>
      <CiMobile3 />
      <h2>Mobile Shopee</h2>
      </div>
     <Link to={'/cart'}  className='cartButton'>Cart({totalQuantity})</Link>
    </nav>
  )
}

export default Navbar