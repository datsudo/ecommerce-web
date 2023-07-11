import { Navbar, Container, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import NavMenu from './NavMenu';
import { brandName, brandLogo } from '../constants';

const Header = () => {
  return (
    <header>
      <Navbar
        expand='lg'
        className='bg-body-tertiary'
        variant='light'
        data-bs-theme='light'
        stick='top'
      >

        <Container fluid className='mb-2 px-0'>

          <LinkContainer to='/'>
            {/* BRAND */}
            <Navbar.Brand alt={brandName} className='mt-2 d-flex'>
              {brandLogo}
              <Container className='px-0'>
                <span className='s-at-k ms-2' style={{ fontSize: '1.8rem' }}>{brandName}</span>
              </Container>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='mt-2'
          />

          <Container fluid className='p-0 d-flex'>
            <Navbar.Collapse
              id='basic-navbar-nav'
              className='mt-2'
            >
              <SearchBox />
              <NavMenu />

            </Navbar.Collapse>
          </Container>


        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
