import React from 'react';
import './Products.css';

export default function Product6() {
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
        'https://rukminim1.flixcart.com/image/416/416/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafcsgvna5y995u.jpeg?q=70',
    },
    {
      label: 'Fourth Picture',
      imgPath:
        'https://rukminim1.flixcart.com/image/416/416/k0wqwsw0/electric-kettle/g/t/d/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkhehkvwuwycu.jpeg?q=70',
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
      <h3>Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle)</h3>
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
          </div>
        </div>
        <div className="grid2">
          <p>
            <h1>₹ 894</h1>
            <br />
            <br />
            <b>Highlights :</b>
            <br />
            <br />
            <ul>
              <li>Suitable For: Maggi, Pasta & Noodles</li>
              <li>Stainless Steel Body</li>
              <li>Consumes: 1500 W</li>
              <li>Auto Switch Off</li>
              <li>Capacity: 1.5 L</li>
            </ul>
            <br />
            <br />
            <b>Description :</b>
            <p>
              Prepare hot water, instant tea etc in a matter of minutes with
              Butterfly EKN 1.5 Kettle. With attractive features like automatic
              cut-off, ergonomically designed handles, unique designs with
              attractive finishes, lightweight and compact, making it easy to
              carry. To top it off, it also comes with the best in class safety
              features & stainless Steel water bottle , making it safe to use.
            </p>
          </p>
          <button>Add To Cart</button>&nbsp;&nbsp;
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
