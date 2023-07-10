import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='lts-product-card' fluid>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} className='lts-product-img' variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className='lts-product-title'>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <div>
            <Rating
              value={product.rating}
              text={` (${product.numReviews})`}
            />
          </div>
          <span className='lts-product-price'>
            <span className='currency-new'>₱</span>
            {product.price}
          </span>
          <span className='currency-orig'>₱</span>
          <span className='lts-product-orig-price'>
            {product.origPrice}
          </span>
        </Card.Text>


      </Card.Body>
    </Card>
  );
};

export default Product;
