import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  brandName,
  navEmail,
  navPhoneNumber,
  extLinkIcon,
  phoneIcon,
  emailIcon,
  addressIcon,
  fbIcon,
  twtIcon,
  instaIcon,
} from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className='footer-cont pb-3 pt-5' fluid>
        <Container className='d-flex footer-main-row justify-content-center'>
          <Col md={4} sm={12} className='footer-logo mb-3'>
            <Link to='/'>
              <Image className='footer-logo' src='/logo.png' />
            </Link>
          </Col>

          <Col md={8} className='footer-contacts'>
            <Row>
              <h2 className='s-at-k' style={{ fontSize: '2.5rem' }}>
                {brandName}
              </h2>
            </Row>

            <Row>
              <Col className='mb-4' lg={4} md={12}>
                <h5>Contact</h5>
                <div>
                  <b>{phoneIcon} </b>
                  <a href='tel:+631234567890' className='social-link'>
                    {navPhoneNumber}
                  </a>
                </div>
                <div>
                  <b>{emailIcon} </b>
                  <a href='mailto:example@email.com' className='social-link'>
                    {navEmail}
                  </a>
                </div>
                <div>
                  <b>{addressIcon} </b>
                  10 St. Peter Street, San Jose Village, Muntinlupa City, Metro
                  Manila
                </div>
              </Col>
              <Col className='mb-4' md={4} sm={6} xs={12}>
                <h5>Follow</h5>
                <div>
                  {fbIcon} {}
                  <a
                    href='https://facebook.com'
                    className='social-link'
                    rel='noopener noreferrer'
                  >
                    Facebook {extLinkIcon}
                  </a>
                </div>
                <div>
                  {twtIcon} {}
                  <a
                    href='https://twitter.com'
                    className='social-link'
                    rel='noopener noreferrer'
                  >
                    Twitter {extLinkIcon}
                  </a>
                </div>
                <div>
                  {instaIcon} {}
                  <a
                    href='https://instagram.com'
                    className='social-link'
                    rel='noopener noreferrer'
                  >
                    Instagram {extLinkIcon}
                  </a>
                </div>
              </Col>
              <Col>
                <h5>About</h5>
                <div>
                  <Link to='/about' className='social-link'>
                    Our Business
                  </Link>
                </div>
                <div>
                  <Link to='/blog' className='social-link'>
                    Our Blog
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </Container>
      <Container className='text-center pt-1 pb-5 footer-cpright' fluid>
        <small>
          {brandName} &copy; {currentYear}
        </small>
      </Container>
    </footer>
  );
};
export default Footer;
