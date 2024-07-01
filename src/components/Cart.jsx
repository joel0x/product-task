import React from 'react';

function Cart({ cartItems, increaseQuantity, decreaseQuantity, goBack }) {

  const totalCost = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    return total + itemPrice * item.quantity;
  }, 0);


  return (
    <div className='cart'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className='cart-item'>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className='quantity-controls'>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>
        ))
      )}
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      <button>Buy Now</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Cart;
