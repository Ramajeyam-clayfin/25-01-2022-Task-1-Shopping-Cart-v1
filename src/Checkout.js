import React, { useContext, useState } from 'react';
import { Info } from './Context';
import './checkout.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function Checkout() {
  const { cartItems, setStep, user, setuser, tPrice } = useContext(Info);

  let Order = () => {
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
      <div className="cart">
        <Button
          variant="contained"
          onClick={() => setStep(1)}
          style={{ float: 'left' }}
        >
          ❮ Back{' '}
        </Button>
        <Button
          variant="contained"
          onClick={() => setStep(0)}
          style={{ float: 'right' }}
        >
          Home{' '}
        </Button>
      </div>
      <h1 style={{ textAlign: 'center' }}>CHECKOUT PAGE</h1>
      <div className="body">
        <div className="li">
          <form>
            <TextField
              label="Name"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, name: e.target.value }))
              }
            />
            <br />
            <br />
            <TextField
              label="Email"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, mail: e.target.value }))
              }
            />
            <br />
            <br />
            <TextField
              label="Mobile"
              type="Number"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, mob: e.target.value }))
              }
            />
            <br />
            <br />
            <TextField
              label="Address"
              placeholder="Street Address"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, street: e.target.value }))
              }
            />
            <br />
            <TextField
              placeholder="Address Line 2"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, line2: e.target.value }))
              }
            />
            <br />
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              style={{ minWidth: 220 }}
              labelId="demo-simple-select-label"
              value={user.city}
              onChange={(e) =>
                setuser((user) => ({ ...user, city: e.target.value }))
              }
            >
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Cuddalore">Cuddalore</MenuItem>
              <MenuItem value="Pondicherry">Pondicherry</MenuItem>
            </Select>
            <br />
            <br />
            <TextField
              placeholder="State/Region"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, state: e.target.value }))
              }
            />
            <br />
            <br />
            <TextField
              type="Number"
              placeholder="Postal / Zip Code"
              size="small"
              onChange={(e) =>
                setuser((user) => ({ ...user, zipcode: e.target.value }))
              }
            />
            <br />
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
                <div className="items">
                  <div className="image">
                    <img style={{ height: 20 }} src={x.pImg} />
                  </div>
                  &nbsp;&nbsp;
                  {x.pName}&nbsp;&nbsp; Price : ₹ {x.pPrice}&nbsp;&nbsp; Qty :
                  {x.pQty}
                  &nbsp;&nbsp;
                </div>
              </div>
            ))}
            <br />
            <br />
            Total Price : {tPrice} <br />
            <br />
            <Button
              className="checkout"
              variant="outlined"
              onClick={() => Order()}
            >
              Place Order{' '}
            </Button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
