import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
      ref={(node) => {
        if(node) {
          node.style.setProperty("border-radius", "50%", "important")
        }
      }}
    ></Spinner>
  );
};

export default Loader;
