import React, { useContext, useState } from 'react';
import { Info } from './Context';

export default function CartProducts() {
  const { cartItems, setCartItems } = useContext(Info);
  const [qty, setQty] = useState(1);
  const price = Amnt();
  const [tPrice, setPrice] = useState(Amnt());

  function Amnt() {
    let amount = cartItems.map((a) => a.pPrice);
    return amount;
  }
  let Addqty = () => {
    setQty(qty + 1);
    setPrice(price * (qty + 1));
  };

  let Subqty = () => {
    setQty(qty - 1);
    setPrice(price * (qty - 1));
  };

  return (
    <div>
      {cartItems.map((x) => (
        <div key={x.pId}>
          <img style={{ height: 50 }} src={x.pImg} />
          &nbsp;&nbsp;
          {x.pName}&nbsp;&nbsp; Price : ₹ {x.pPrice}&nbsp;&nbsp; Qty : {qty}
          &nbsp;&nbsp;
          <button onClick={() => Addqty()}>+</button>&nbsp;&nbsp;{' '}
          <button onClick={() => Subqty()}>-</button>
        </div>
      ))}
      Total Price : ₹ {tPrice}
    </div>
  );
}
