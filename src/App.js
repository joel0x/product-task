import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const goBack = () => {
    setCartVisible(false);
  };

  return (
    <div className='App'>
      <nav className='navbar'>
        <h1>Product Store</h1>
        <button onClick={toggleCartVisibility}>
          Cart
        </button>
      </nav>
      
      {!cartVisible ? (
        <ProductCard addToCart={addToCart} />
      ) : (
        <Cart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          goBack={goBack}
        />
      )}
    </div>
  );
}

export default App;
