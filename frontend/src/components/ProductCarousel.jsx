import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {

  return (
    <Carousel
      className='banner-ad mb-5'
      indicators={false}
      controls={false}
      pause='hover'
      fade
    >
      <Carousel.Item>
        <img
          className='banner-img d-block'
          src='/images/camera.jpg'
          alt='banner'
        ></img>
        <Carousel.Caption className='banner-caption d-md-block'>
          {/* TODO: banner ad slogan and description*/}
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <div>
            <p className='banner-caption-desc'>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
