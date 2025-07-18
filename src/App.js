// src/App.js
import React, { useState } from 'react'; // 1. Import useState
import './App.css';
import Menu from './Components/menu'; // Import the component
import Cart from './Components/Cart';

function App() {
  // 2. Create state for the cart. It starts as an empty array.
  // 'cart' is the data, 'setCart' is the function to update it.
  const [cart, setCart] = useState([]);

  // 3. Create a function to add an item to the cart
  const addToCart = (item) => {
    // We use the spread operator (...) to create a new array
    // containing all old items PLUS the new item.
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The AI Barista</h1>
      </header>

      <main className="main-content">
        <section className="menu-section">
          {/* 4. Pass the addToCart function down to the Menu */}
          <Menu addToCart={addToCart} />
        </section>

        <section className="cart-section">
          {/* 5. Pass the cart state down to the Cart */}
          <Cart cartItems={cart} />
        </section>
      </main>
    </div>
  );
}

export default App;
