import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { logout } from './slices/authSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
  }, [dispatch]);

  return (
    <Container fluid className='d-flex flex-column justify-content-between px-0 mx-0 my-0 py-0' style={{ height: '100%' }}>
      <ToastContainer />
      <Header />
      <div className='main-content'>
        <Container className='px-0 pb-5' fluid>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </Container>
  );
};

export default App;
