import React, { useContext } from 'react';
import { Info } from '../Context';
import './Products.css';

export default function Product7() {
  const { setProduct } = useContext(Info);
  const MyImages = [
    {
      label: 'First Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/k6fd47k0pkrrdj/headphone/z/f/j/jbl-c100tws-original-imafmtrsguv29yz6.jpeg?q=70',
    },
    {
      label: 'Second Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kfpq5jk0-0/headphone/7/e/9/jblc100twsblkin-jblc100twsblk-jbl-original-imafw3r99zaswxnr.jpeg?q=70',
    },
    {
      label: 'Third Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/t/3/x/jblc100twsblkin-jblc100twsblk-jbl-original-imag4r5qvn3accru.jpeg?q=70',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/e/d/v/jblc100twsblkin-jblc100twsblk-jbl-original-imag4r5q6ech6wq3.jpeg?q=70',
    },
    {
      label: 'Fifth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/kqttg280/headphone/i/d/g/jblc100twsblkin-jblc100twsblk-jbl-original-imag4r5qskm3maej.jpeg?q=70',
    },
    {
      label: 'Sixth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/krce64w0/headphone/x/6/d/jblc100twsblkin-jblc100twsblk-jbl-original-imag55ey9urjdxp7.jpeg?q=70',
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
        JBL C100TWS True Wireless with Google Assistant Bluetooth Headset
        (Black, True Wireless)
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
          <p>
            <h1>₹ 2,499</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Battery life: 5 hrs | Charging time: 2 hours</li>
              <li>Advanced Stereo Calling with Crystal Clear Sound Quality</li>
              <li>Quick Charging - 15min of Charge gives 1 Hour of charge</li>
              <li>
                Truly Wireless Earbuds with Auto Sync Feature. Pair only the
                right earpod. The left one pairs automatically
              </li>
              <li>Bluetooth version: 5</li>
            </ul>
            <br />
            <br />
            <b>Description :</b>
            <p>
              Groove to your favorite songs wirelessly by bringing home the JBL
              C100TWS True Wireless Earbuds. Thanks to Bluetooth 5.0
              connectivity, you can wirelessly listen to songs without any
              distortion or lag. This fully charged pair of earbuds offers a
              playtime of up to 5 hours on a single charge. With the charging
              case, you can further get a runtime of up to 12 hours. So, all you
              need to do is keep your playlist ready and be prepared to stay
              entertained for long hours.
            </p>
          </p>
          <button>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
