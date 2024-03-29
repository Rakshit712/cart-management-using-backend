import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {addToCart, fetchProducts} from "../features/cartsSlice"

function Product() {
  const items = useSelector((state)=>state.allCart.items);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);
 
  return (
    <div className='productContainer'>
      <div className='card'>
        
        {items.length>0 ?(items.map((item)=>(
    
          <div key={item.id}>
            
            
          <img className='img' alt={item.title} src= {item.img}></img>
          <h2>{item.title}</h2>
          <p>Price : {item.price}  $+</p>
          <button onClick={()=>dispatch(addToCart(item))}>add To Cart</button>
          <hr/>

          </div>)
        )):<><h1>Loading....</h1></>}
      
      </div>

    </div>
  )
}

export default Product