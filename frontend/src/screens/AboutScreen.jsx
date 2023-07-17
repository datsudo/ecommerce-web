import { Container, Image } from 'react-bootstrap';
import { brandName } from '../constants';

export default function AboutScreen() {
  return (
    <Container className='mt-3 text-center'>
      <Image src='/logo.png' className='mb-3' style={{ width: '200px' }} />
      <h1>
        About <span className='s-at-k'>{brandName}</span>
      </h1>

      <p>
        <strong>Sinulid at Kawit</strong> was founded by passionate
        artisans with a deep love for the art of crochet. With years
        of experience and expertise in creating beautiful
        and functional crocheted items, we set. out to bring our unique designs and
        craftsmanship to the world. This crocheted bag business is a unique
        venture that combines creativity, craftsmanship, and functionality to
        provide customers with beautifully handcrafted bags. We believe in the
        power of handmade products nd the value they add to our lives.
      </p>
      <p className='mb-5'>
        <strong>Crocheting</strong> is not only an ancient craft but also a means of <strong>self-expression</strong>, <strong>creativity</strong>,
        and <strong>sustainability</strong>. We take pride in using high-quality
        yarns and eco-friendly materials to create durable and timeless crocheted
        bags that are both fashionable and functional. Which revolves around
        offering a wide range of crocheted bags that are not only stylish and
        trendy but also eco-friendly and sustainable.
      </p>

      <hr />

      <h1>Vision</h1>

      <p>
        Our vision is to become a leading brand in the
        crocheted bag industry, known for our commitment to sustainability,
        craftsmanship, and exceptional customer experience. We aim to inspire
        individuals to embrace eco-friendly fashion choices and make a positive
        impact on the environment without compromising on style.
      </p>

      <hr />

    </Container>
  );
}
