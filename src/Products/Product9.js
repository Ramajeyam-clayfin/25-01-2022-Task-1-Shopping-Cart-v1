import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';

export default function Product9() {
  const { setProduct } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/k7dnonk0/sunglass/c/d/b/medium-ro-dc001-elligator-original-imafpmy5rurzjutm.jpeg?q=50',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/k58hwnk0/sunglass/9/h/s/53-brs-20-briota-original-imafhj8zazgyt3xt.jpeg?q=50',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/k6l2vm80/sunglass/k/t/q/free-size-taz12503-tazzx-original-imafewfrxvusegze.jpeg?q=50',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/jyug0i80/sunglass/x/u/b/free-size-avrndc007-srpm-original-imafgzyfufhszdze.jpeg?q=50',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/k7dnonk0/sunglass/c/d/b/medium-ro-dc001-elligator-original-imafpmy5jga8hdhy.jpeg?q=50',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/k4ohqq80/sunglass/z/f/9/medium-rnddc021-elgator-original-imafgnhjpbeg9x7c.jpeg?q=50',
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

  return (
    <div>
      <button onClick={() => setProduct(0)}>Back</button>
      <h3>
        Elligator - UV Protection Round Sunglasses (54) (For Men & Women,
        Multicolor)
      </h3>
      <div className="grid">
        <div className="grid1">
          <div className="mainimg">
            <img
              src={MyImages[index].imgPath}
              style={{ overflow: 'hidden', width: '80%', maxHeight: 450 }}
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
          <p>
            <h1>₹ 198</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Ideal For Men & Women</li>
              <li>Purpose : Driving, Running, Style, Biking, Eye Protection</li>
              <li>UV Protection</li>
              <li>14 Days Return Policy</li>
              <li>This product is sold as Medium by the Brand</li>
            </ul>
            <br />
            <br />
          </p>
          <button>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
