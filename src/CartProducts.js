import React, { useContext, useState } from 'react';
import { Info } from './Context';

export default function CartProducts() {
  const { cartItems, setCartItems, setStep, tPrice, setPrice } = useContext(Info);
 
  setPrice(Amnt());
  function Amnt() {
    let price = cartItems.reduce(
      (total, product) => total + product.pPrice * product.pQty,
      0
    );
    return price;
  }
  
  let addqty = (id) => {
    const newArr = cartItems.map((obj) => {
      if (obj.pId === id) {
        obj = { pQty: obj.pQty++, ...obj };
      }
      return obj;
    });
    setCartItems(newArr);
    setPrice(Amnt());
    return;
  };

  let Subqty = (id) => {
    const newArr = cartItems.map((obj) => {
      if (obj.pId === id) {
        obj = { pQty: obj.pQty--, ...obj };
      }
      return obj;
    });
    setCartItems(newArr);
    setPrice(Amnt());
    return;
  };
  let remove = (id) =>{
    const removeitem = cartItems.filter((r) => r.pId !== id);
    setCartItems([...removeitem]);
  }

  return (
    <div>
      {cartItems.map((x) => (
        <div key={x.pId}>
          <img style={{ height: 50 }} src={x.pImg} />
          &nbsp;&nbsp;
          {x.pName}&nbsp;&nbsp; Price : ₹ {x.pPrice}&nbsp;&nbsp; Qty : {x.pQty}
          &nbsp;&nbsp;
          <button onClick={() => addqty(x.pId)}>+</button>&nbsp;&nbsp;{' '}
          {
            x.pQty > 1 &&
              <button
                onClick={() => Subqty(x.pId)}
                className="">
                -
              </button>
          }

          {
            x.pQty === 1 &&
              <button
                onClick={() => remove(x.pId)}
                className="">
                Remove
              </button>
          }
          
        </div>
      ))}
      Total Price : ₹ {tPrice}&nbsp;&nbsp; <button onClick={() => setStep(2)}>Checkout</button>
    </div>
  );
}
