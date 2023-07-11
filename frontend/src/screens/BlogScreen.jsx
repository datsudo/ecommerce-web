import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';

export default function BlogScreen() {
  return (
    <Container className='mt-3'>
      <h1>Blog Posts</h1>
      <Container className='px-0 mt-4' fluid>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <BlogCard
              id={1}
              title='Sample article 1'
              pubdate='July 11, 2023'
              img='/images/phone.jpg'
            />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <BlogCard
              id={2}
              title='Sample article 2'
              pubdate='July 13, 2023'
              img='/images/camera.jpg'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
