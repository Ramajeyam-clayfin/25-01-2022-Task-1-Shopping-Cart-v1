import React, { useContext } from 'react';
import { Info } from './Context';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'

export default function CartProducts() {
  const { cartItems, setCartItems, setStep, tPrice, setPrice } =
    useContext(Info);

  setPrice(Amnt()); //setting the tprice by calling amnt() function
  function Amnt() {
    let price = cartItems.reduce(
      (total, product) => total + product.pPrice * product.pQty,
      0
    ); //using reduce it sum all the price values and Multiply with the sum of all qty values
    return price;
  }

  let addqty = (id) => {
    //used to add the quantity of the product
    const newArr = cartItems.map((obj) => {
      if (obj.pId === id) {
        obj = { pQty: obj.pQty++, ...obj }; //by using pId we get the object we need and increment the pQty property to increase quantity
      }
      return obj;
    });
    setCartItems(newArr); //now isert the updated pQty property into cartItems array
    setPrice(Amnt()); //to increase the total price according to qty we set the tprice with updated qty value
    return;
  };

  let Subqty = (id) => {
    // used to reduce the quantity of the product
    const newArr = cartItems.map((obj) => {
      if (obj.pId === id) {
        obj = { pQty: obj.pQty--, ...obj }; //by using pId we get the object we need and decrement the pQty property to decrease quantity
      }
      return obj;
    });
    setCartItems(newArr);
    setPrice(Amnt());
    return;
  };

  let remove = (id) => {
    //used to remove items from cart
    const removeitem = cartItems.filter((r) => r.pId !== id);
    setCartItems([...removeitem]); //using filter we get all objects except the object that match the id and we inserting it into cartItems array
  };

  return (
    <div className='body'>
      {cartItems.map((x) => (
        <div key={x.pId} className='contentbox'>
          <li className="li">
            <div>
              <div className="items">
                <div className="image">
                  <img style={{ height: 20 }} src={x.pImg} />
                </div>&nbsp;&nbsp;
                {x.pName}&nbsp;&nbsp; Price : ₹ {x.pPrice}&nbsp;&nbsp; Qty : {x.pQty}
              </div>
              &nbsp;&nbsp;
              <IconButton onClick={() => addqty(x.pId)}>
                <AddIcon style={{color: 'black' }} />
              </IconButton>&nbsp;&nbsp;{' '}
              {x.pQty > 1 && (
                <IconButton onClick={() => Subqty(x.pId)}>
                  <RemoveIcon  style={{color: 'black' }}/>
                </IconButton>
                
              )}
              {x.pQty === 1 && (
                <IconButton onClick={() => remove(x.pId)}>
                  <DeleteIcon style={{color: 'black' }} />
                </IconButton>
              
              )}
            </div>
          </li>
        </div>
      ))}<br/><br/>
      <b>Total Price : ₹ {tPrice}</b>&nbsp;&nbsp;{' '}<br/><br/>
      <Button className='checkout' variant="outlined"  endIcon={} onClick={() => setStep(2)} >Checkout </Button>
    </div>
  );
}
