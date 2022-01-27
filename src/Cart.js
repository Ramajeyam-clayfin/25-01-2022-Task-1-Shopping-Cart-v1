import React, { useContext } from 'react';
import { Info } from './Context';
import CartProducts from './CartProducts';

export default function Cart() {
  const { cartItems, setCartItems } = useContext(Info);

  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      <div>
        <div>
          {cartItems.length > 0 ? (
            <CartProducts />
          ) : (
            <div> Your Cart Is Empty.. </div>
          )}
        </div>
      </div>
    </div>
  );
}
