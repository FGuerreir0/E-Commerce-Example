import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
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
        <div className='logo'>Pipe.fy</div>
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
            <li>
              {/* <div className='nav_basket'>
                <i class='fas fa-shopping-cart'></i>
  </div>*/}
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
                <li></li>
              </>
            )}
          </ul>
        </nav>
        {props.user && (
          <div className='nav_basket_phone'>
            <label>(0)</label>
            <i class='fas fa-shopping-cart'></i>
          </div>
        )}
        <div className='menu-toggle'>
          <label htmlFor='toggle' className='fas fa-bars'></label>
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
