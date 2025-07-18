// src/components/Cart.js
import React from 'react';
import './Cart.css';

function Cart({ cartItems }) { // Receive cartItems as a "prop" (property)
  // Calculate the total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Order</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;