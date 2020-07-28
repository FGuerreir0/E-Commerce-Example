import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
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
    <>
      <header>
        <div className='logo'>Logo</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Water</Link>
            </li>

            <li>
              <Link to='/'>Snow</Link>
            </li>

            <li>
              <Link to='/'>Skate</Link>
            </li>
            <li>
              <Link to='/'>Clothes</Link>
            </li>

            {(props.user && (
              <>
                <li>
                  <button onClick={logoutEvent}>Logout</button>
                </li>
              </>
            )) || (
              <>
                <li>
                  <Link to='/authentication/login'>Login</Link>
                </li>
                <li>
                  <Link to='/authentication/register'>Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className='menu-toggle'>
          <label for='toggle' class='fas fa-bars'></label>
          <input type='checkbox' id='toggle' />
          <nav>
            <ul>
              <li>
                <Link to='/'>Water</Link>
              </li>

              <li>
                <Link to='/'>Snow</Link>
              </li>

              <li>
                <Link to='/'>Skate</Link>
              </li>
              <li>
                <Link to='/'>Clothes</Link>
              </li>

              {(props.user && (
                <>
                  <li>
                    <button onClick={logoutEvent}>Logout</button>
                  </li>
                </>
              )) || (
                <>
                  <li>
                    <Link to='/authentication/login'>Login</Link>
                  </li>
                  <li>
                    <Link to='/authentication/register'>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
