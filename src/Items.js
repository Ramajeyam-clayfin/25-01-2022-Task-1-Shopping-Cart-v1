import React, { useContext, useState } from 'react';
import { Info } from './Context';
import Product1 from './Products/Product1';
import Product2 from './Products/Product2';
import Product3 from './Products/Product3';
import Product4 from './Products/Product4';
import Product5 from './Products/Product5';
import './items.css';

export default function Items() {
  const {setStep} = useContext(Info);
  const {product, setProduct} = useContext(Info);

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
        return <Product3 />;
      case 7:
        return <Product3 />;
      case 8:
        return <Product3 />;
      case 9:
        return <Product3 />;
      case 10:
        return <Product3 />;
      
    }
  }

  function Display(){
    return(
      <div className="products">
        
         <h1>Shopping Cart Application</h1>
        
        <div className="product1">
        <a  onClick={() => setProduct(1)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=70" />
          
         </a>
          <div class="desc">
            <p> SAMSUNG Galaxy A21s</p>
            <p>Price : ₹ 17,499 </p>
            <button onClick={() => setProduct(1)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 1 </p>
          </div>
          
        </div>
  
        <div className="product2">
        <a onClick={() => setProduct(2)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70" />
          </a>
          <div class="desc">
            <p> Teddy Bear</p>
            <p>Price : ₹ 178 </p>
            <button onClick={() => setProduct(2)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 2</p>
          </div>
          
        </div>
  
        <div className="product3">
        <a onClick={() => setProduct(3)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg?q=70" />
          </a>
          <div class="desc">
            <p> Electric Kettle</p>
            <p>Price : ₹ 894 </p>
            <button onClick={() => setProduct(3)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 3</p>
          </div>
          
        </div>
  
        <div className="product4">
        <a onClick={() => setProduct(4)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>Sewing Machine</p>
            <p>Price : ₹ 12,900 </p>
            <button onClick={() => setProduct(4)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 4</p>
          </div>
         
        </div>
  
        <div className="product5">
        <a onClick={() => setProduct(5)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>Backpack</p>
            <p>Price : ₹ 710 </p>
            <button onClick={() => setProduct(5)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 5</p>
          </div>
          
        </div>
  
        <div className="product6">
        <a onClick={() => setProduct(6)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/ksaoqkw0/shoe/y/j/x/9-rider-01cwhiteskyy-asian-white-sky-original-imag5wa8kfhmvvnt.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>Shoe</p>
            <p>Price : ₹ 1,099 </p>
            <button onClick={() => setProduct(6)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 6</p>
          </div>
          
        </div>
  
        <div className="product7">
        <a onClick={() => setProduct(7)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/headphone/z/f/j/jbl-c100tws-original-imafmtrsguv29yz6.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>True Wireless Headphone</p>
            <p>Price : ₹ 2,499 </p>
            <button onClick={() => setProduct(7)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 7</p>
          </div>
         
        </div>
  
        <div className="product8">
        <a onClick={() => setProduct(8)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>Bluetooth Speaker</p>
            <p>Price : ₹ 1,499 </p>
            <button onClick={() => setProduct(8)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 8</p>
          </div>
         
        </div>
  
        <div className="product9">
        <a onClick={() => setProduct(9)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/k7dnonk0/sunglass/c/d/b/medium-ro-dc001-elligator-original-imafpmy5rurzjutm.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>Sunglass</p>
            <p>Price : ₹ 198 </p>
            <button onClick={() => setProduct(9)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 9</p>
          </div>
          
        </div>
  
        <div className="product10">
        <a onClick={() => setProduct(10)} style={{ cursor: 'pointer' }} type="text/html">
          <img src="https://rukminim1.flixcart.com/image/150/150/k9d3p8w0/headphone/j/v/f/rockerz-255f-rockerz-255-boat-original-imafr68zshenv3ya.jpeg?q=70" />
          </a>
          <div class="desc">
            <p>Wireless Headphone</p>
            <p>Price : ₹ 949 </p>
            <button onClick={() => setProduct(10)}>Details</button>
            <button >Add to Cart</button><br/>
            <button >Buy Now</button>
            <p>Product : 10</p>
          </div>
          
        </div>
      </div>
    );
  }
  

  return (
   <div> 
     {showProduct(product)}
    </div>
  );
}

