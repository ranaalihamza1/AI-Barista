// src/components/Menu.js
import React from 'react';
import './Menu.css';

const menuItems = [
    { id: 1, name: 'Espresso', price: 2.50, category: 'coffee' },
    { id: 2, name: 'Latte', price: 3.50, category: 'coffee' },
    { id: 3, name: 'Cappuccino', price: 3.50, category: 'coffee' },
    { id: 4, name: 'Filter Coffee', price: 3.00, category: 'coffee' },
    { id: 5, name: 'Croissant', price: 2.20, category: 'food' },
    { id: 6, name: 'Muffin', price: 2.75, category: 'food' }
];

// The component now receives the 'addToCart' function as a prop
function Menu({ addToCart }) {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            {/* This button will trigger the function passed from App.js */}
            <button onClick={() => addToCart(item)}>
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;