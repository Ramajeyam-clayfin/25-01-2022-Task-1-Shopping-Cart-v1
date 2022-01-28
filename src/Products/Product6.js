import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

export default function Product6() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki7qw7k0-0/shoe/9/d/t/rider-01cskywht-7-asian-white-original-imafyfxhb5rg6xzx.jpeg?q=50',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki7qw7k0-0/shoe/d/i/x/rider-01cskywht-7-asian-white-original-imafyfxhs6cpuwhe.jpeg?q=50',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/kidgnm80-0/shoe/i/7/a/rider-01ncskywht-10-wilto-multi-original-imafy6cyemwuksqt.jpeg?q=50',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/kidgnm80-0/shoe/n/q/g/rider-01ncskywht-8-wilto-multi-original-imafy6bhgyuhqahu.jpeg?q=50',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki7qw7k0-0/shoe/i/i/n/rider-01cskywht-7-asian-white-original-imafyfxh69d6wugf.jpeg?q=50',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki7qw7k0-0/shoe/z/m/y/rider-01cskywht-7-asian-white-original-imafyfxhafgrme7c.jpeg?q=50',
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
    alert('Shoe is Added to Cart');
    const addProduct = [
      {
        pId: 6,
        pImg: 'https://rukminim1.flixcart.com/image/150/150/ksaoqkw0/shoe/y/j/x/9-rider-01cwhiteskyy-asian-white-sky-original-imag5wa8kfhmvvnt.jpeg?q=70',
        pName: 'Shoe',
        pQty: 1,
        pPrice: 1099,
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
        ASIAN - Rider-01 White Running Shoes for Men I Sport Shoes for Boys with
        Beads Technology Sole for Extra Jump I Memory Foam Insole Running Shoes
        For Men (White)
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
            <h1>₹ 1,099</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Color : White</li>
              <li>Outer material : Fabric</li>
              <li>Sole material : Phylon</li>
              <li>14 Days Return Policy</li>
            </ul>
            <br />
            <br />
            <b>Description :</b>
            <p>
              Rider-01 White Running Shoes for Men I Sport Shoes for Boys with
              Beads Technology Sole for Extra Jump I Memory Foam Insole
            </p>
          </>
          <Button variant="outlined"  endIcon={} onClick={(e) => Addcart(e)} >Add to Cart </Button>&nbsp;&nbsp;
          <Button variant="contained"  > BUY Now </Button>
        </div>
      </div>
    </div>
  );
}
