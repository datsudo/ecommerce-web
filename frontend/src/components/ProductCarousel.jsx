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
          src='/images/pottery.png'
          alt='banner'
        ></img>
        <Carousel.Caption className='banner-caption d-md-block'>
          {/* TODO: banner ad slogan and description*/}
          <h1>Feel the crafts</h1>
          <div>
            <p className='banner-caption-desc'>
              <span style={{ fontWeight: 'normal' }}>beyond</span>
              <div className='satk'>needles and threads</div>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
