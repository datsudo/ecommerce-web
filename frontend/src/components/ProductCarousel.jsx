import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel
        className='banner-ad mb-4'
        indicators={false}
        controls={false}
        pause='hover'
        fade
      >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img
              className="banner-img d-block"
              src={product.image}
              alt={product.name}
              >
            </img>
            <Carousel.Caption className='banner-caption d-md-block'>
              {/* TODO: banner ad slogan and description*/}
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
              <div>
                <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
              </div>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
