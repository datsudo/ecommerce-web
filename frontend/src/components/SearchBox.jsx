import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { searchBtnIcon, searchPlaceholder } from '../constants';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Container fluid className='p-0 d-flex'>
      <Form
        onSubmit={submitHandler}
        className='flex-fill'
      >
        <Container fluid className='p-0 d-flex'>

          <Container fluid className='p-0 me-1'>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className='border-2'
            ></Form.Control>
          </Container>

          <Button
            type='submit'
            variant='secondary'
          >
            {searchBtnIcon}
          </Button>

        </Container>
      </Form>
    </Container>
  );
};

export default SearchBox;
