import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';

export default function Product4() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kkzrpu80/sewing-machine/b/a/p/simple-3223-85-watt-automatic-sewing-machine-green-singer-original-imagy7sghmwghy7p.jpeg?q=70',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kkzrpu80/sewing-machine/j/g/a/simple-3223-85-watt-automatic-sewing-machine-green-singer-original-imagy7sgs9tpbgzf.jpeg?q=70',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kkzrpu80/sewing-machine/i/f/t/simple-3223-85-watt-automatic-sewing-machine-green-singer-original-imagy7sgkznn8ujk.jpeg?q=70',
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
    alert('Sewing Machine is Added to Cart');
    const addProduct = [
      {
        pId: 4,
        pImg: 'https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70',
        pName: 'Sewing Machine',
        pQty: 1,
        pPrice: 12900,
      },
      ...cartItems,
    ];
    setCartItems(addProduct);
  };

  return (
    <div>
      <button onClick={() => setProduct(0)}>Back</button>&nbsp;&nbsp;
      <button onClick={() => setStep(1)}>Cart</button>
      <h3>
        Singer Simple 3223 85-Watt Automatic Sewing Machine (Green) Electric
        Sewing Machine ( Built-in Stitches 23)
      </h3>
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
          </div>
        </div>
        <div className="grid2">
          <>
            <h1>₹ 12,900</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Electric</li>
              <li>Number of Stitches: 23</li>
              <li>800 SPM Sewing Speed</li>
              <li>4 Button Hole Styles</li>
            </ul>
            <br />
            <br />
            <b>In the Box :</b>
            <p>
              Sewing Machine, Accessories, Foot Paddle, Warranty Card cum User
              Manual
            </p>
          </>
          <button onClick={(e) => Addcart(e)}>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
