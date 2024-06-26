import Carousel from 'react-bootstrap/Carousel';

import img9 from "./Assets/sl1.jpg"
import img10 from "./Assets/sl2.jpg"
import img11 from "./Assets/sl3.jpg"


function IndividualIntervalsExample() {
  return (
    <Carousel className='slidimg'>
<Carousel.Item interval={3000}>
      < img src={img10} alt='efw' style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Relaxing hotel</h3>
          <p>Enjoy the Red Sea and the stunning views</p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={img9} alt='efw' style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Egyptian pharaonic hotel</h3>
          <p>A struggle with the Pharaonic civilizations and ancient Egypt</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      < img src={img11} alt='efw' style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Ancient pyramids</h3>
          <p>
          Make trips and book about the Pharaonic pyramidsl
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;