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
              title='Why crochet bags are considered "eco-friendly"?'
              desc='In recent years, there has been a growing emphasis on sustainable and eco-friendly choices in various aspects of our lives, including fashion'
              pubdate='July 11, 2023'
              img='/images/blog-poster-1.png'
            />
          </Col>
          <Col sm={12} md={6} lg={4} xl={3}>
            <BlogCard
              id={2}
              title='Sample article 2'
              desc=''
              pubdate='July 13, 2023'
              img='/images/blog-poster-2.png'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
