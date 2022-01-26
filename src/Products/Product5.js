import React from 'react';
import './Products.css';

export default function Product5() {
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
    {
      label: 'Seventh Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/kh5607k0/backpack/6/7/q/litt-unisex-backpack-with-rain-cover-and-reflective-strip-p-032-original-imafx86avhnsytef.jpeg?q=50',
    },
    {
      label: 'Eighth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/800/960/klv7ekw0/backpack/b/q/6/classic-4ss-adn336-laptop-backpack-adidas-original-imagyw65uyfkmu3c.jpeg?q=50',
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
      <h3>
        PROVOGUE - Large 35 L Laptop Backpack Spacy unisex backpack with rain
        cover and reflective strip (Blue)
      </h3>
      <div className="grid">
        <div className="grid1">
          <img
            src={MyImages[index].imgPath}
            style={{ overflow: 'hidden' }}
            alt={MyImages[index].label}
          />
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
            <img
              className="thumbimg"
              src={MyImages[0].imgPath}
              onClick={() => setActiveStep(0)}
            />
            <img
              className="thumbimg"
              src={MyImages[1].imgPath}
              onClick={() => setActiveStep(1)}
            />
            <img
              className="thumbimg"
              src={MyImages[2].imgPath}
              onClick={() => setActiveStep(2)}
            />
            <img
              className="thumbimg"
              src={MyImages[3].imgPath}
              onClick={() => setActiveStep(3)}
            />
            <img
              className="thumbimg"
              src={MyImages[4].imgPath}
              onClick={() => setActiveStep(4)}
            />
            <img
              className="thumbimg"
              src={MyImages[5].imgPath}
              onClick={() => setActiveStep(5)}
            />
            <img
              className="thumbimg"
              src={MyImages[6].imgPath}
              onClick={() => setActiveStep(6)}
            />
            <img
              className="thumbimg"
              src={MyImages[7].imgPath}
              onClick={() => setActiveStep(7)}
            />
          </div>
        </div>
        <div className="grid2">
          <p>
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
          </p>
          <button>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
