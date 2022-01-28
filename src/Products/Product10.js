import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

export default function Product10() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/t/h/u/-original-imag87kdvdhmaynm.jpeg?q=70',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/a/g/u/-original-imag87kdeqtn7pgk.jpeg?q=70',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/z/b/u/-original-imag87kdvjfgfufj.jpeg?q=70',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/5/l/y/-original-imag87kd2aeeee5a.jpeg?q=70',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/x/b/p/-original-imag87kdxyzreshj.jpeg?q=70',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kv9urgw0/headphone/d/k/1/-original-imag87kduyqykf5d.jpeg?q=70',
    },
  ];
  const CollectionSize = MyImages.length;
  const [index, setActiveStep] = React.useState(0);

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  let Addcart = (e) => {
    e.preventDefault();
    alert('Wireless Headphone is Added to Cart');
    const addProduct = [
      {
        pId: 10,
        pImg: 'https://rukminim1.flixcart.com/image/150/150/k9d3p8w0/headphone/j/v/f/rockerz-255f-rockerz-255-boat-original-imafr68zshenv3ya.jpeg?q=70',
        pName: 'Wireless Headphone',
        pQty: 1,
        pPrice: 949,
      },
      ...cartItems,
    ];
    setCartItems(addProduct);
  };

  return (
    <div>
      <div className='cart'>
        <Button variant="contained" onClick={() => setProduct(0)}  style={{ float: 'left' }}  >❮ Back </Button>
          <IconButton color="primary" aria-label="add to shopping cart" >
            <AddShoppingCartIcon onClick={() => setStep(1)}  />
          </IconButton>
        </div>
      <h3 className='title'>
        boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset
        (Black, In the Ear)
      </h3>
      <div className="grid">
        <div className="grid1">
          <div className="mainimg">
            <img
              src={MyImages[index].imgPath}
              style={{ overflow: 'hidden', width: '80%' }}
              alt={MyImages[index].label}
            />
          </div>
          <br />
          <button
            className="prev"
            onClick={goToPrevPicture}
            disabled={index == 0}
          >
            ❮
          </button>
          <button
            className="next"
            onClick={goToNextPicture}
            disabled={index === CollectionSize - 1}
          >
            ❯
          </button>
          <br />
          <br />
          <div className="thumbnail">
            <div>
              <img
                className="thumbimg"
                src={MyImages[0].imgPath}
                onClick={() => setActiveStep(0)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                src={MyImages[1].imgPath}
                onClick={() => setActiveStep(1)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                src={MyImages[2].imgPath}
                onClick={() => setActiveStep(2)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                src={MyImages[3].imgPath}
                onClick={() => setActiveStep(3)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                src={MyImages[4].imgPath}
                onClick={() => setActiveStep(4)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                src={MyImages[5].imgPath}
                onClick={() => setActiveStep(5)}
              />
            </div>
          </div>
        </div>
        <div className="grid2">
          <>
            <h1>₹ 949</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Battery Time: Upto 8 Hours</li>
              <li>ASAP Charge: 20 Mins= 4 Hours</li>
              <li>IPX5: Water & Sweat Resistance</li>
              <li>Wireless range: 10 m</li>
              <li>10m Drivers</li>
            </ul>
            <br />
            <br />
            <b>Description :</b>
            <p>
              Let music brighten up your mood anytime, anywhere with the boAt
              235v2 Fast Charging Bluetooth Headset. This Bluetooth headset
              features a Call Vibration Alert, a Fast Charging Technology, and
              Easy Access Controls to listen to and manage your favorite music
              with ease.
            </p>
          </>
          <Button variant="outlined"  endIcon={} onClick={(e) => Addcart(e)} >Add to Cart </Button>&nbsp;&nbsp;
          <Button variant="contained"  > BUY Now </Button>
        </div>
      </div>
    </div>
  );
}
