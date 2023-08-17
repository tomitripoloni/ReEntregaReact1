import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="cart-widget" onClick={() => setCartCount(cartCount + 1)}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
