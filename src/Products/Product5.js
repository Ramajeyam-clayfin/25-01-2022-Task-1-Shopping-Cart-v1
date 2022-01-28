import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';


export default function Product5() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=50',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki3gknk0-0/backpack/z/x/s/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyyp3nhjdy3k.jpeg?q=50',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki3gknk0-0/backpack/h/e/w/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyyp7uggh7ph.jpeg?q=50',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki3gknk0-0/backpack/d/y/s/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyyptzffzrct.jpeg?q=50',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki3gknk0-0/backpack/5/g/d/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypdqraffdv.jpeg?q=50',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/ki3gknk0-0/backpack/f/k/u/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypwhfynrts.jpeg?q=50',
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
    alert('Backpack is Added to Cart');
    const addProduct = [
      {
        pId: 5,
        pImg: 'https://rukminim1.flixcart.com/image/150/150/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=70',
        pName: 'Backpack',
        pQty: 1,
        pPrice: 710,
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
        PROVOGUE - Large 35 L Laptop Backpack Spacy unisex backpack with rain
        cover and reflective strip (Blue)
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
            <h1>₹ 710</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Ideal For Men & Women</li>
              <li>With Rain Cover</li>
              <li>Compatible Laptop Size 12, 13, 15.6, 17</li>
              <li>14 Days Return Policy</li>
              <li>Capacity: 35 L</li>
            </ul>
            <br />
            <br />
          </>
          <Button variant="outlined"  endIcon={} onClick={(e) => Addcart(e)} >Add to Cart </Button>&nbsp;&nbsp;
          <Button variant="contained"  > BUY Now </Button>
        </div>
      </div>
    </div>
  );
}
