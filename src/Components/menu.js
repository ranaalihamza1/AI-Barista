// src/components/Menu.js
import React from 'react'; // We need this for every component
import './Menu.css';       // We'll create this file for styling

// This is our data. Later, this might come from a database.
const menuItems = [
  { id: 1, name: 'Espresso', price: 2.50 },
  { id: 2, name: 'Latte', price: 3.50 },
  { id: 3, name: 'Cappuccino', price: 3.50 },
  { id: 4, name: 'Filter Coffee', price: 3.00 },
];

function Menu() {
  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;