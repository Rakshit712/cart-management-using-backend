import React from 'react'
import { useSelector } from 'react-redux';

function Order() {
    const { cart } = useSelector((state) => state.allCart);

    return (
      <div>
        <h2>Orders</h2>
        <div className="orderItems">
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                <strong>{item.title}</strong> - Quantity: {item.quantity}, Price: ${item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  


export default Order