import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

export default function Product1() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=70',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuy9hmwzhuef.jpeg?q=70',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuy9zqrxsech.jpeg?q=70',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuy9xzdhgfy7.jpeg?q=70',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyabyquh2gg.jpeg?q=70',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyawvhehrsj.jpeg?q=70',
    },
  ];
  const CollectionSize = MyImages.length; //stores the length of the MyImages array
  const [index, setIndex] = React.useState(0); // used to navigate images

  const goToNextPicture = () => {
    //used to show next image
    setIndex((prevIndex) => prevIndex + 1);
  };
  const goToPrevPicture = () => {
    // used to show previos image
    setIndex((prevIndex) => prevIndex - 1);
  };
  let Addcart = (e) => {
    //used to add the product details into cart
    e.preventDefault();
    alert('SAMSUNG Galaxy A21s is Added to Cart');
    const addProduct = [
      {
        pId: 1,
        pImg: 'https://rukminim1.flixcart.com/image/224/224/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=90',
        pName: 'SAMSUNG Galaxy A21s',
        pQty: 1,
        pPrice: 17499,
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
      
      <h3 className='title'>SAMSUNG Galaxy A21s (Black, 64 GB) (4 GB RAM)</h3>
      <div className="grid">
        <div className="grid1">
          <div className="mainimg">
            <img
              src={MyImages[index].imgPath}
              style={{ overflow: 'hidden' }}
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
                style={{ width: 'auto' }}
                src={MyImages[0].imgPath}
                onClick={() => setIndex(0)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                style={{ width: 'auto' }}
                src={MyImages[1].imgPath}
                onClick={() => setIndex(1)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                style={{ width: 'auto' }}
                src={MyImages[2].imgPath}
                onClick={() => setIndex(2)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                style={{ width: 'auto' }}
                src={MyImages[3].imgPath}
                onClick={() => setIndex(3)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                style={{ width: 'auto' }}
                src={MyImages[4].imgPath}
                onClick={() => setIndex(4)}
              />
            </div>

            <div>
              <img
                className="thumbimg"
                style={{ width: 'auto' }}
                src={MyImages[5].imgPath}
                onClick={() => setIndex(5)}
              />
            </div>
          </div>
        </div>
        <div className="grid2">
          <>
            <h1>₹ 17,499</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
              <li>16.51 cm (6.5 inch) HD+ Display</li>
              <li>48MP + 8MP + 2MP + 2MP | 13MP Front Camera</li>
              <li>5000 mAh Lithium-ion Battery</li>
              <li>Exynos 850 Octa Core Processor</li>
              <li>TFT LCD Display</li>
            </ul>
            <br />
            <br />
            <b>Description :</b>
            <p>
              Whether it’s movies, games, or videos, every form of content
              that’s displayed on this smartphone’s 16.63 cm (6.5) Infinity-O
              display will be a treat to the eyes. Be it day or night, you can
              capture amazing pictures on the Samsung Galaxy A21s, thanks to the
              48 MP quad-rear-camera setup. You can also capture picture-perfect
              selfies, while being the center of attention, thanks to the 13 MP
              front camera with Live Focus effects.
            </p>
          </>
          <Button variant="outlined"  endIcon={} onClick={(e) => Addcart(e)} >Add to Cart </Button>&nbsp;&nbsp;
          <Button variant="contained"  > BUY Now </Button>
        </div>
      </div>
    </div>
  );
}
