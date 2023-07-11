import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  navEmail,
  navPhoneNumber,
  aboutNavMenuLabel,
  blogNavMenuLabel,
  brandName,
} from '../constants.js';

export default function NavTop() {
  return (
    <Container fluid className='p-0 navbar-upper'>
      <Row className='p-0 navbar-upper-row'>
        {/* BRAND NAME */}
        <Col lg={4} sm={12} xs={12}>
          <Row lg='auto'>
            <Col
              lg='auto'
              className='text-center navbar-label navbar-upper-brand'
            >
              {brandName}
            </Col>
          </Row>
        </Col>

        <Col lg={8}>
          <Row lg='auto' className='d-flex justify-content-end'>
            <Col lg='auto'>
              <Row lg='auto' className='d-flex justify-content-end text-center'>
                {/* phone num */}
                <Col lg='auto' md={6} sm={6} xs={6} className='navbar-label'>
                  <a href='tel:+631234567890'>{navPhoneNumber}</a>
                </Col>

                {/* email */}
                <Col lg='auto' md={6} sm={6} xs={6} className='navbar-label'>
                  <a href='mailto:example@email.com'>{navEmail}</a>
                </Col>
              </Row>
            </Col>

            <Col lg='auto'>
              <Row
                lg={12}
                className='d-flex text-center justify-content-between'
              >
                {/* about */}
                <Col
                  lg='auto'
                  md={5}
                  sm={5}
                  xs={5}
                  className='navbar-label navbar-upper-imp'
                >
                  <Link to='/about'>{aboutNavMenuLabel}</Link>
                </Col>

                {/* blog */}
                <Col
                  lg='auto'
                  md={5}
                  sm={5}
                  xs={5}
                  className='navbar-label navbar-upper-imp navbar-upper-blog'
                >
                  <Link to='/blog'>{blogNavMenuLabel}</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
