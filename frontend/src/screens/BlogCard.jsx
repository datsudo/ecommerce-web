import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BlogCard(props) {
  return (
    <Card className='blog-card' fluid>
      <Link to={`/blog/${props.id}`}>
        <Card.Img className='blog-card-img' variant='bottom' src={props.img} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/blog/${props.id}`} className='blog-card-title'>
            {props.title}
          </Link>
        </Card.Title>
        <Card.Subtitle className='mt-1 mb-2 text-muted'>
          {props.pubdate}
        </Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit... {}
          <Link to={`/blog/${props.id}`}>Read more</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
