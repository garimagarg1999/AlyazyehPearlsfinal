import Carousel from 'react-bootstrap/Carousel';
import "./Corousal.css"
import img2 from './Images-Corousal/img2.jpg'



function Corousal() {
  return (
    <Carousel slide={false} className='corousal-bg'>
      <Carousel.Item className='corousal-img-div'>
        <img
          className="d-block w-100 pic-style"
          src={"https://images.pexels.com/photos/5442447/pexels-photo-5442447.jpeg?auto=compress&cs=tinysrgb&w=1600"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='corousal-img-div'>
        <img
          className="d-block w-100 pic-style"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='corousal-img-div'>
        <img
          className="d-block w-100 pic-style"
          src={"https://images.pexels.com/photos/4374433/pexels-photo-4374433.jpeg?auto=compress&cs=tinysrgb&w=1600"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousal;