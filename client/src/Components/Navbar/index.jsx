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
        <div className='logo'>Pipe.Fy</div>
        <nav>
          <ul>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Surf
              </Link>
              <div className='dropdown-content'>
                <Link to='/'>Boards</Link>
                <Link to='/'>Fins</Link>
                <Link to='/'>Wax</Link>
                <Link to='/'>Accessories</Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Bodyboard
              </Link>
              <div className='dropdown-content'>
                <Link to='/'>Boards</Link>
                <Link to='/'>Accessories</Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Stand-up
              </Link>
              <div className='dropdown-content'>
                <Link to='/'>Inflatable Sup</Link>
                <Link to='/'>Hard Boards</Link>
                <Link to='/'>Paddles</Link>
                <Link to='/'>Accessories</Link>
                <Link to='/'>Clothing</Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Skate
              </Link>
              <div className='dropdown-content'>
                <Link to='/'>Skateboards</Link>
                <Link to='/'>Decks</Link>
                <Link to='/'>Wheels</Link>
                <Link to='/'>Trucks</Link>
                <Link to='/'>Grip Tape</Link>
                <Link to='/'>Accessories</Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Wetsuits
              </Link>
              <div className='dropdown-content'>
                <Link to='/'>Man</Link>
                <Link to='/'>Woman</Link>
                <Link to='/'>Junior</Link>
              </div>
            </li>
            <li>
              {/* <div className='nav_basket'>
                <i class='fas fa-shopping-cart'></i>
  </div>*/}
            </li>

            {(props.user && (
              <>
                <li className='nav_separator'>
                  <Link className='nav_separator'>|</Link>
                </li>
                <li>
                  <div className='nav_logout'>
                    <Link to='/' onClick={logoutEvent}>
                      Logout
                    </Link>
                  </div>
                </li>
              </>
            )) || (
              <>
                <li className='nav_separator'>
                  <Link className='nav_separator'>|</Link>
                </li>
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
                    <div className='nav_logout'>
                      <Link to='/' onClick={logoutEvent}>
                        Logout
                      </Link>
                    </div>
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
