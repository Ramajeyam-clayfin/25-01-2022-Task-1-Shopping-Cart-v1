import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';

export default function Product8() {
  const { setProduct, cartItems, setCartItems, setStep } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kh3qkcw0-0/speaker/mobile-tablet-speaker/p/n/4/stone-350-boat-original-imafx73phbq4wbxy.jpeg?q=70',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kh3qkcw0-0/speaker/mobile-tablet-speaker/c/q/w/stone-350-boat-original-imafx73pxhd2xdhm.jpeg?q=70',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kh3qkcw0-0/speaker/mobile-tablet-speaker/v/e/v/stone-350-boat-original-imafx73padtwcwph.jpeg?q=70',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kh3qkcw0-0/speaker/mobile-tablet-speaker/y/4/t/stone-350-boat-original-imafx73pmn9syygv.jpeg?q=70',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kh3qkcw0-0/speaker/mobile-tablet-speaker/7/f/g/stone-350-boat-original-imafx73pze83ewsg.jpeg?q=70',
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
    alert('Bluetooth Speaker is Added to Cart');
    const addProduct = [
      {
        pId: 8,
        pImg: 'https://rukminim1.flixcart.com/image/150/150/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70',
        pName: 'Bluetooth Speaker',
        pQty: 1,
        pPrice: 1499,
      },
      ...cartItems,
    ];
    setCartItems(addProduct);
  };

  return (
    <div>
      <button onClick={() => setProduct(0)}>Back</button>&nbsp;&nbsp;
      <button onClick={() => setStep(1)}>Cart</button>
      <h3>boAt Stone 350 10 W Bluetooth Speaker (Black, Mono Channel)</h3>
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
            <h1>₹ 1,499</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Power Output(RMS): 10 W</li>
              <li>Battery life: 12 hrs</li>
              <li>IPX7: Splash and Sweat Shield</li>
              <li>Multiple Connectivity: BT, TF Card and AUX</li>
              <li>Wireless range: 10 m</li>
            </ul>
            <br />
            <br />
            <b>Description :</b>
            <p>
              Its time to enjoy a seamless playback experience courtesy boAt
              Stone 350 10W portable wireless speaker. The speaker comes
              equipped with 1.96 dynamic drivers for an immersive stereo
              experience. It supports instant wireless connectivity with
              Bluetooth v5.0. The speaker pumps out nonstop audio for up to 12
              hours on a single full charge. Apart from the wireless
              connectivity it comes equipped with the provision for AUX and TF
              Card connectivity as well. Its a cylindrical construct and an IPX7
              rated water resistance for a carefree listening time and easy
              portability. Immerse into the realm of Nirvana wherever you go,
              with boAt Stone 350. The speaker also supports TWS feature meaning
              you can connect two Stone 350s and forge them into one for a
              bigger impact.
            </p>
          </>
          <button onClick={(e) => Addcart(e)}>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
