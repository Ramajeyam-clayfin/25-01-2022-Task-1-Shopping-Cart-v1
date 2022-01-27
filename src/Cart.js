import React, { useContext } from 'react';
import { Info } from './Context';
import CartProducts from './CartProducts';

export default function Cart() {
  const { cartItems, setCartItems, setStep } = useContext(Info);

  return (
    <div>
      <button onClick={() => setStep(0)}>Back</button>
      <div>
        <h1>My Cart</h1>
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
