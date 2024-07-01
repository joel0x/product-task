import React, { useState } from 'react';
import '../../src/App.css';
import products from '../products.js';

function Product({ id, name, price, des, addToCart }) {
  return (
    <div className='prd-card'>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{des}</p>
      <button onClick={() => addToCart({ id, name, price, des })}>Add to cart</button>
    </div>
  );
}

function ProductCard({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='main-container'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='products'>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            des={product.des}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
