import React, { createContext, useState } from 'react';

export const Info = createContext();

export const InfoProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
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
  const [currentStep, setStep] = useState();
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
