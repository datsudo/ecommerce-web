import { Nav, Badge, NavDropdown, Button, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  cartNavMenuLabel,
  adminNavMenuLabel,
  loginNavMenuLabel,
  aboutNavMenuLabel,
  contactNavMenuLabel,
  blogNavMenuLabel,
} from '../constants';

export default function NavMenu() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };


  const contactFixHover = {
    color: '#736E6C',
    '&:hover, &:focus': {
      color: '#191817'
    }
  }

  return (
    <Nav>
      <LinkContainer to='/about' className='d-flex ms-1'>
        <Nav.Link>{aboutNavMenuLabel}</Nav.Link>
      </LinkContainer>

      <LinkContainer to=''>
        <Nav.Link>
          <NavHashLink
            to='#footer-section'
            className='d-flex contact-nav'
            style={contactFixHover}
          >
            {contactNavMenuLabel}
          </NavHashLink>
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to='/blog' className='d-flex'>
        <Nav.Link>{blogNavMenuLabel}</Nav.Link>
      </LinkContainer>

      <LinkContainer to='/cart' className='d-flex'>
        <Nav.Link>
          {cartNavMenuLabel}
          {cartItems.length > 0 && (
            <Badge pill bg='success' className='ms-2'>
              {cartItems.reduce((a, c) => a + c.qty, 0)}
            </Badge>
          )}
        </Nav.Link>
      </LinkContainer>

      {userInfo ? (
        <>
          {/* Username */}
          <NavDropdown
            title={
              <>
                {' '}
                <FontAwesomeIcon className='mt-1 pe-1' icon={faUser} />{' '}
                {userInfo.name}{' '}
              </>
            }
            id='username'
            align='end'
            className='ms-1'
          >
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      ) : (
        <LinkContainer to='/login'>
          <Button variant='primary' className='d-flex ms-1'>
            {loginNavMenuLabel}
          </Button>
        </LinkContainer>
      )}

      {/* Admin Links */}
      {userInfo && userInfo.isAdmin && (
        <NavDropdown
          title={adminNavMenuLabel}
          id='adminmenu'
          align='end'
          className='ms-1'
        >
          <LinkContainer to='/admin/productlist'>
            <NavDropdown.Item>Products</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/admin/orderlist'>
            <NavDropdown.Item>Orders</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/admin/userlist'>
            <NavDropdown.Item>Users</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      )}
    </Nav>
  );
}
