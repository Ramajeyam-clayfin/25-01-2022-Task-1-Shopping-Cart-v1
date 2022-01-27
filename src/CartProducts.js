import React, { useContext, useState } from 'react';
import { Info } from './Context';

export default function CartProducts() {
  const { cartItems, setCartItems } = useContext(Info);
  const [tPrice, setPrice] = useState(Amnt());

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

  return (
    <div>
      {cartItems.map((x) => (
        <div key={x.pId}>
          <img style={{ height: 50 }} src={x.pImg} />
          &nbsp;&nbsp;
          {x.pName}&nbsp;&nbsp; Price : ₹ {x.pPrice}&nbsp;&nbsp; Qty : {x.pQty}
          &nbsp;&nbsp;
          <button onClick={() => addqty(x.pId)}>+</button>&nbsp;&nbsp;{' '}
          <button onClick={() => Subqty(x.pId)}>-</button>
        </div>
      ))}
      Total Price : ₹ {tPrice}
    </div>
  );
}
