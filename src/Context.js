import React, { createContext, useState } from 'react';

export const Info = createContext();

export const InfoProvider = (props) => {
  const [cartItems, setCartItems] = useState([ {
    pId: 1,
    pImg: 'https://rukminim1.flixcart.com/image/224/224/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=90',
    pName: 'SAMSUNG Galaxy A21s',
    pQty: 1,
    pPrice: 17499,
  },]);
  const [user, setuser] = useState({
    name: '',
    mail: '',
    mob: null,
    street: '',
    line2: '',
    city: '',
    state: '',
    zipcode: null,
    country: '',
    payment: '',
  });
  const [product, setProduct] = useState(0);
  const [currentStep, setStep] = useState(2);
  const [tPrice, setPrice] = useState(null);

  return (
    <div>
      <Info.Provider
        value={{
          user,
          setuser,
          product,
          setProduct,
          currentStep,
          setStep,
          cartItems,
          setCartItems,
          tPrice,
          setPrice,
        }}
      >
        {props.children}
      </Info.Provider>
    </div>
  );
};
export const InfoConsumer = Info.Consumer;
