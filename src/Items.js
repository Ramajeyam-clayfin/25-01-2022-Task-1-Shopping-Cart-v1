import React, { useContext, useState } from 'react';
import { Info } from './Context';
import Product1 from './Products/Product1';
import Product2 from './Products/Product2';
import Product3 from './Products/Product3';
import Product4 from './Products/Product4';
import Product5 from './Products/Product5';
import Product6 from './Products/Product6';
import Product7 from './Products/Product7';
import Product8 from './Products/Product8';
import Product9 from './Products/Product9';
import Product10 from './Products/Product10';
import './items.css';

export default function Items() {
  const { product, setProduct, artItems, setStep, setCartItems } =
    useContext(Info);

  function showProduct(product) {
    switch (product) {
      case 0:
        return <Display />;
      case 1:
        return <Product1 />;
      case 2:
        return <Product2 />;
      case 3:
        return <Product3 />;
      case 4:
        return <Product4 />;
      case 5:
        return <Product5 />;
      case 6:
        return <Product6 />;
      case 7:
        return <Product7 />;
      case 8:
        return <Product8 />;
      case 9:
        return <Product9 />;
      case 10:
        return <Product10 />;
    }
  }

  function Display() {
    const { product, setProduct, cartItems, setStep, setCartItems } =
      useContext(Info);
    let id = 0;

    let Addcart = (e, id) => {
      e.preventDefault();
      if (id == 1) {
        alert('SAMSUNG Galaxy A21s is Added to Cart');
        const addProduct1 = [
          {
            pId: 1,
            pImg: 'https://rukminim1.flixcart.com/image/224/224/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=90',
            pName: 'SAMSUNG Galaxy A21s',
            pQty: 1,
            pPrice: 17499,
          },
          ...cartItems,
        ];
        setCartItems(addProduct1);
      } else if (id == 2) {
        alert('Teddy Bear is Added to Cart');
        const addProduct2 = [
          {
            pId: 2,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70',
            pName: 'Teddy Bear',
            pQty: 1,
            pPrice: 178,
          },
          ...cartItems,
        ];
        setCartItems(addProduct2);
      } else if (id == 3) {
        alert('Electric Kettle is Added to Cart');
        const addProduct3 = [
          {
            pId: 3,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg?q=70',
            pName: 'Electric Kettle',
            pQty: 1,
            pPrice: 894,
          },
          ...cartItems,
        ];
        setCartItems(addProduct3);
      } else if (id == 4) {
        alert('Sewing Machine is Added to Cart');
        const addProduct4 = [
          {
            pId: 4,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70',
            pName: 'Sewing Machine',
            pQty: 1,
            pPrice: 12900,
          },
          ...cartItems,
        ];
        setCartItems(addProduct4);
      } else if (id == 5) {
        alert('Backpack is Added to Cart');
        const addProduct5 = [
          {
            pId: 5,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=70',
            pName: 'Backpack',
            pQty: 1,
            pPrice: 710,
          },
          ...cartItems,
        ];
        setCartItems(addProduct5);
      } else if (id == 6) {
        alert('Shoe is Added to Cart');
        const addProduct6 = [
          {
            pId: 6,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/ksaoqkw0/shoe/y/j/x/9-rider-01cwhiteskyy-asian-white-sky-original-imag5wa8kfhmvvnt.jpeg?q=70',
            pName: 'Shoe',
            pQty: 1,
            pPrice: 1099,
          },
          ...cartItems,
        ];
        setCartItems(addProduct6);
      } else if (id == 7) {
        alert('True Wireless Headphone is Added to Cart');
        const addProduct7 = [
          {
            pId: 7,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/headphone/z/f/j/jbl-c100tws-original-imafmtrsguv29yz6.jpeg?q=70',
            pName: 'True Wireless Headphone',
            pQty: 1,
            pPrice: 2499,
          },
          ...cartItems,
        ];
        setCartItems(addProduct7);
      } else if (id == 8) {
        alert('Bluetooth Speaker is Added to Cart');
        const addProduct8 = [
          {
            pId: 8,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70',
            pName: 'Bluetooth Speaker',
            pQty: 1,
            pPrice: 1499,
          },
          ...cartItems,
        ];
        setCartItems(addProduct8);
      } else if (id == 9) {
        alert('Sunglass is Added to Cart');
        const addProduct9 = [
          {
            pId: 9,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/k7dnonk0/sunglass/c/d/b/medium-ro-dc001-elligator-original-imafpmy5rurzjutm.jpeg?q=70',
            pName: 'Sunglass',
            pQty: 1,
            pPrice: 198,
          },
          ...cartItems,
        ];
        setCartItems(addProduct9);
      } else if (id == 10) {
        alert('Wireless Headphone is Added to Cart');
        const addProduct10 = [
          {
            pId: 10,
            pImg: 'https://rukminim1.flixcart.com/image/150/150/k9d3p8w0/headphone/j/v/f/rockerz-255f-rockerz-255-boat-original-imafr68zshenv3ya.jpeg?q=70',
            pName: 'Wireless Headphone',
            pQty: 1,
            pPrice: 949,
          },
          ...cartItems,
        ];
        setCartItems(addProduct10);
      }
    };


    return (
      <div className="products">
        <button onClick={() => setStep(1)}>Cart</button>
        <h1>Shopping Cart Application</h1>

        <div className="product1">
          <a
            onClick={() => setProduct(1)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=70" />
          </a>
          <div>
            <p> SAMSUNG Galaxy A21s</p>
            <p>Price : ₹ 17,499 </p>
            <button onClick={() => setProduct(1)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 1))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product2">
          <a
            onClick={() => setProduct(2)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70" />
          </a>
          <div>
            <p> Teddy Bear</p>
            <p>Price : ₹ 178 </p>
            <button onClick={() => setProduct(2)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 2))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product3">
          <a
            onClick={() => setProduct(3)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg?q=70" />
          </a>
          <div>
            <p> Electric Kettle</p>
            <p>Price : ₹ 894 </p>
            <button onClick={() => setProduct(3)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 3))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product4">
          <a
            onClick={() => setProduct(4)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70" />
          </a>
          <div>
            <p>Sewing Machine</p>
            <p>Price : ₹ 12,900 </p>
            <button onClick={() => setProduct(4)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 4))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product5">
          <a
            onClick={() => setProduct(5)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=70" />
          </a>
          <div>
            <p>Backpack</p>
            <p>Price : ₹ 710 </p>
            <button onClick={() => setProduct(5)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 5))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product6">
          <a
            onClick={() => setProduct(6)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/ksaoqkw0/shoe/y/j/x/9-rider-01cwhiteskyy-asian-white-sky-original-imag5wa8kfhmvvnt.jpeg?q=70" />
          </a>
          <div>
            <p>Shoe</p>
            <p>Price : ₹ 1,099 </p>
            <button onClick={() => setProduct(6)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 6))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product7">
          <a
            onClick={() => setProduct(7)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/headphone/z/f/j/jbl-c100tws-original-imafmtrsguv29yz6.jpeg?q=70" />
          </a>
          <div>
            <p>True Wireless Headphone</p>
            <p>Price : ₹ 2,499 </p>
            <button onClick={() => setProduct(7)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 7))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product8">
          <a
            onClick={() => setProduct(8)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70" />
          </a>
          <div>
            <p>Bluetooth Speaker</p>
            <p>Price : ₹ 1,499 </p>
            <button onClick={() => setProduct(8)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 8))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product9">
          <a
            onClick={() => setProduct(9)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/k7dnonk0/sunglass/c/d/b/medium-ro-dc001-elligator-original-imafpmy5rurzjutm.jpeg?q=70" />
          </a>
          <div>
            <p>Sunglass</p>
            <p>Price : ₹ 198 </p>
            <button onClick={() => setProduct(9)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 9))}>Add to Cart</button>
            <br />
            
          </div>
        </div>

        <div className="product10">
          <a
            onClick={() => setProduct(10)}
            style={{ cursor: 'pointer' }}
            type="text/html"
          >
            <img src="https://rukminim1.flixcart.com/image/150/150/k9d3p8w0/headphone/j/v/f/rockerz-255f-rockerz-255-boat-original-imafr68zshenv3ya.jpeg?q=70" />
          </a>
          <div>
            <p>Wireless Headphone</p>
            <p>Price : ₹ 949 </p>
            <button onClick={() => setProduct(10)}>Details</button>
            <button onClick={(e) => Addcart(e, (id = 10))}>Add to Cart</button>
            <br />
            
          </div>
        </div>
      </div>
    );
  }

  return <div>{showProduct(product)}</div>;
}
