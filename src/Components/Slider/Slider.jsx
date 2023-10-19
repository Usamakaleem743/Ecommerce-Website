import { memo, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Shoe1 from '../../Assets/images/shoe1.jpg'
import Shoe2 from '../../Assets/images/shoe2.jpg'
import Shoe3 from '../../Assets/images/shoe3.jpg'
import Shoe4 from '../../Assets/images/shoe4.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item className='mt-5'>
        <img className='d-block w-100' style={{ height: '670px' }} src={Shoe1} alt="Bag1" />
        <Carousel.Caption>
          <h3>Branded Shoes</h3>
          <p>Summers SALE up to 50% OFF what are you wating for.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='mt-5'>
        <img className='d-block w-100' style={{ height: '670px' }} src={Shoe2} alt="Bag1" />
        <Carousel.Caption>
          <h3>Branded Shoes</h3>
          <p>AUTUMN is coming, choose what suits you THE BEST</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mt-5'>
        <img className='d-block w-100' style={{ height: '670px' }} src={Shoe3} alt="Bag1" />
        <Carousel.Caption>
          <h3>Shoes</h3>
          <p>Make your feet as comfortable as walking on the beach</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mt-5'>
        <img className='d-block w-100' style={{ height: '670px' }} src={Shoe4} alt="Bag1" />
        <Carousel.Caption>
          <h3>Branded Shoes</h3>
          <p>Choose between basketball and fashion or choose both</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default memo(ControlledCarousel)