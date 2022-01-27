import React, { useContext, useState } from 'react';
import { Info } from './Context';

export default function Checkout() {
  const { cartItems, setStep, user, setuser, tPrice } = useContext(Info);

  let Checkout = () => {
    let newLine = '\r\n';
    let name = '';
    let price = null;
    let qty = null;
    cartItems.map((x) => {
      name = x.pName;
      price = x.pPrice;
      qty = x.pQty;
    });
    alert(
      ` Name : ${user.name}${newLine} Email : ${user.mail}${newLine} Mobile : ${user.mob}${newLine} Address :  ${user.street},${newLine}  ${user.line2}${newLine} City : ${user.city}${newLine} State : ${user.state} - ${user.zipcode}${newLine} Country : ${user.country}${newLine} Payment Mode : ${user.payment}${newLine}${newLine} Order Details : ${newLine} ${name}${newLine} Price : ₹ ${price}${newLine} Qty : ${qty}${newLine} Total Price : ${tPrice}${newLine}${newLine} Order is Placed${newLine} Thank you For Shopping`
    );
    setStep(0);
  };

  return (
    <div>
      <button onClick={() => setStep(0)}>Home</button>
      <h1>Checkout Page</h1>
      <div>
        <form>
          <label>Name : </label>
          <input
            placeholder=""
            type="text"
            onChange={(e) =>
              setuser((user) => ({ ...user, name: e.target.value }))
            }
          />
          <br />
          <br />
          <label>Email : </label>
          <input
            type="text"
            onChange={(e) =>
              setuser((user) => ({ ...user, mail: e.target.value }))
            }
          />
          <br />
          <br />
          <label>Mobile : </label>
          <input
            type="Number"
            onChange={(e) =>
              setuser((user) => ({ ...user, mob: e.target.value }))
            }
          />
          <br />
          <br />
          <label>Address : </label>
          <br />
          <input
            type="text"
            placeholder="Street Address"
            onChange={(e) =>
              setuser((user) => ({ ...user, street: e.target.value }))
            }
          />
          <br />
          <input
            type="text"
            placeholder="Address Line 2"
            onChange={(e) =>
              setuser((user) => ({ ...user, line2: e.target.value }))
            }
          />
          <br />
          <label>City : </label>
          <select
            value={user.city}
            onChange={(e) =>
              setuser((user) => ({ ...user, city: e.target.value }))
            }
          >
            <option value="">--select--</option>
            <option value="Chennai">Chennai</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Pondicherry">Pondicherry</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="State/Region"
            onChange={(e) =>
              setuser((user) => ({ ...user, state: e.target.value }))
            }
          />
          <br />
          <input
            type="Number"
            placeholder="Postal / Zip Code"
            onChange={(e) =>
              setuser((user) => ({ ...user, zipcode: e.target.value }))
            }
          />
          <br />
          <label>Country : </label>
          <select
            value={user.country}
            onChange={(e) =>
              setuser((user) => ({ ...user, country: e.target.value }))
            }
          >
            <option value="">--select--</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="China">China</option>
          </select>
          <br />
          <br />
          <label>Payment Mode : </label>
          <select
            value={user.payment}
            onChange={(e) =>
              setuser((user) => ({ ...user, payment: e.target.value }))
            }
          >
            <option value="">--select--</option>
            <option value="UPI">UPI</option>
            <option value="Paytm">Paytm</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Mobile Banking">Mobile Banking</option>
          </select>
          <br />
          <br />
          {cartItems.map((x) => (
            <div key={x.pId}>
              <img style={{ height: 50 }} src={x.pImg} />
              &nbsp;&nbsp;
              {x.pName}&nbsp;&nbsp; Price : ₹ {x.pPrice}&nbsp;&nbsp; Qty :{' '}
              {x.pQty}
              &nbsp;&nbsp;
            </div>
          ))}
          <br />
          <br />
          Total Price : {tPrice} <br />
          <br />
          <button onClick={() => Checkout()}>Place Order</button>
          <br />
        </form>
      </div>
    </div>
  );
}
