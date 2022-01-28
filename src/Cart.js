import React, { useContext } from 'react';
import { Info } from './Context';
import CartProducts from './CartProducts';
import Button from '@mui/material/Button';
import './cart.css';

export default function Cart() {
  const { cartItems, setStep } = useContext(Info);

  return (
    <div>
      {/* to navigate to home page  */}
      <Button
        variant="contained"
        onClick={() => setStep(0)}
        style={{ float: 'left' }}
      >
        ❮ Back{' '}
      </Button>

      <div>
        <h1 className='title'>My Cart</h1>
      </div>
      <div>
        <div>
          {cartItems.length ? (
            <CartProducts />
          ) : (
            <div className='title'> Your Cart Is Empty.. </div>
          )}
        </div>
      </div>
    </div>
  );
}
