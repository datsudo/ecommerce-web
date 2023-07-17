import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <hr />
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} xs={12} sm={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
      <Container className='px-0 mx-0 mt-5' fluid>
        <h1 style={{ marginBottom: '10px' }}>Section 2</h1>
        <hr style={{ marginTop: '0px' }} />
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
      </Container>
      <Container className='px-0 mx-0 mt-5' fluid>
        <h1 style={{ marginBottom: '10px' }}>Visit our blog</h1>
        <hr style={{ marginTop: '0px' }} />
        <p>
          Visit our <Link to='/blog'>blog</Link> and let the threads of creativity guide your crochet journey. In our blogs, we will explore a tapestry of inspiring tutorials, insightful articles, and trendsetting patterns that will ignite your passion for all things crochet.
        </p>
      </Container>
    </>
  );
};

export default HomeScreen;
