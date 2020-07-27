import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  console.log(props);
  return (
    <nav>
      <label>hamburger</label>
      <label>logo</label>

      {(props.user && (
        <>
          <p>login feito</p>{' '}
        </>
      )) || (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
