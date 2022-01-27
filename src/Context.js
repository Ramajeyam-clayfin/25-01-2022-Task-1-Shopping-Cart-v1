import React, { createContext, useState } from 'react';

export const Info = createContext();

export const InfoProvider = (props) => {
  const [cartItems, setCartItems] = useState([
    
]);
  // const [user, setuser] = useState({
  //   name: '',
  //   mail: '',
  //   mob: null,
  //   gender: '',
  //   street: '',
  //   line2: '',
  //   city: '',
  //   state: '',
  //   zipcode: null,
  //   country: '',
  // });
  // const [course, setcourse] = useState({ lang: '', payment: '' });
  const [product, setProduct] = useState(0);
  const [currentStep, setStep] = useState(0);

  return (
    <div>
      <Info.Provider
        // value={
        //   {user, setuser,
        //   course, setcourse,
        //   currentStep, setStep}
        // }
        value={{ product, setProduct, currentStep, setStep, cartItems, setCartItems }}
      >
        {props.children}
      </Info.Provider>
    </div>
  );
};
export const InfoConsumer = Info.Consumer;
