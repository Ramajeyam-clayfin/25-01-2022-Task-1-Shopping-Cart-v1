import React, { useContext } from 'react';
import { Info } from './Context';
import Items from './Items';
import Cart from './Cart';
import Checkout from './Checkout';
import './style.css';

export default function App() {
  const { currentStep } = useContext(Info);

  function showStep(step) {
    switch (step) {
      case 0:
        return <Items />;
      case 1:
        return <Cart />;
      case 2:
        return <Checkout />;
    }
  }

  return <div>{showStep(currentStep)}</div>;
}
