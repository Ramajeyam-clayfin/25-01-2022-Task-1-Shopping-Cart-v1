import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';

export default function Product2() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);

  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kndi4y80/stuffed-toy/6/6/j/cute-nylex-mother-teddy-bear-40-fluffies-original-imag22bhmvgptjgf.jpeg?q=70',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kqo3onk0/stuffed-toy/z/u/a/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4muagfzuhzhb.jpeg?q=70',
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
    alert('Teddy Bear is Added to Cart');
    const addProduct = [
      {
        pId: 2,
        pImg: 'https://rukminim1.flixcart.com/image/150/150/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70',
        pName: 'Teddy Bear',
        pQty: 1,
        pPrice: 178,
      },
      ...cartItems,
    ];
    setCartItems(addProduct);
  };

  return (
    <div>
      <button onClick={() => setProduct(0)}>Back</button>&nbsp;&nbsp;
      <button onClick={() => setStep(1)}>Cart</button>
      <h3>Fluffies Cute Nylex Mother Teddy Bear - 40 cm (Pink)</h3>
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
            <h1>₹ 178</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Character: Teddy Bear</li>
              <li>Age: 3+ Years</li>
              <li>Weight 150 g</li>
            </ul>
            <br />
            <br />
          </>
          <button onClick={(e) => Addcart(e)}>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
