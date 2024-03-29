import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { FiPlusSquare } from "react-icons/fi";
import {
  getCartTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../features/cartsSlice.js"
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart.length]);
  const handleCheckout = ()=>{
    // dispatch()
    console.log(cart)
    
    navigate('/order')
  }
  return (
    <section>
      <div className="heading">
        <h5>Cart - {cart.length} items</h5>
      </div>
      <div className="cartCard">
        {cart?.map((data) => (
          <div className="cardd" key={data.id}>
            <p>
              <strong>{data.title}</strong>
            </p>

            <div className="details">
              <button
                type="button"
                onClick={() => dispatch(removeItem(data.id))}
              >
                <MdDelete />
              </button>
              <button onClick={() => dispatch(decreaseItemQuantity(data.id))}>
                <CiCircleMinus />
              </button>

              <button onClick={() => dispatch(increaseItemQuantity(data.id))}>
                <FiPlusSquare />
              </button>
              <div>
                <h4> Quantity : {data.quantity}</h4>
              </div>
              <p>price :{data.price} $</p>
            </div>

            <hr />
          </div>
        ))}
      </div>

      <div className="summary">
        <h5>Summary</h5>
        <strong> Total Quantity : </strong>
        <span>{totalQuantity}</span>
        <h5> Total amount</h5>
        <span>{totalPrice} $</span>
      </div>
      <button onClick={handleCheckout} className="btnn">Go to checkout</button>
    </section>
  );
}

export default Cart;
