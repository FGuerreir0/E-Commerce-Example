import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from './../../Services/authentication';

const Navbar = (props) => {
  const logoutEvent = () => {
    logout()
      .then(() => {
        props.updateUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav>
      <label>hamburger</label>
      <label>logo</label>

      {(props.user && (
        <>
          <button onClick={logoutEvent}>Logout</button>
        </>
      )) || (
        <>
          <Link to='/authentication/login'>Login</Link>
          <Link to='/authentication/register'>Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
