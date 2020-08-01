import React from 'react';
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

  //SURF HANDLERS
  const changeViewSurfBoards = () => {
    props.updateView('Surf', 'Board');
  };

  const changeViewSurfFins = () => {
    props.updateView('Surf', 'Fins');
  };

  const changeViewSurfWax = () => {
    props.updateView('Surf', 'Wax');
  };

  const changeViewSurfAccessories = () => {
    props.updateView('Surf', 'Accessories');
  };

  //BODYBOARD HANDLERS
  const changeViewBodyboardBoards = () => {
    props.updateView('Bodyboard', 'Board');
  };

  const changeViewBodyboardAccessories = () => {
    props.updateView('Bodyboard', 'Accessories');
  };
  //STANDUP HANDLERS

  const changeViewStandInflatableSup = () => {
    props.updateView('Stand-up', 'Inflatable sup');
  };

  const changeViewStandHardBoards = () => {
    props.updateView('Stand-up', 'HardBoard');
  };

  const changeViewStandPaddles = () => {
    props.updateView('Stand-up', 'Paddles');
  };

  const changeViewStandAccessories = () => {
    props.updateView('Stand-up', 'Accessories');
  };

  const changeViewStandClothing = () => {
    props.updateView('Stand-up', 'Clothing');
  };

  //SKATE HANDLERS

  const changeViewSkateboards = () => {
    props.updateView('Skate', 'Skateboards');
  };
  const changeViewSkateDecks = () => {
    props.updateView('Skate', 'Decks');
  };
  const changeViewSkateWheels = () => {
    props.updateView('Skate', 'Wheels');
  };
  const changeViewSkateTrucks = () => {
    props.updateView('Skate', 'Trucks');
  };
  const changeViewSkateGripTape = () => {
    props.updateView('Skate', 'Grip Tape');
  };
  const changeViewSkateAccessories = () => {
    props.updateView('Skate', 'Accessories');
  };

  //CLOTHE HANDLERS
  const changeViewWetsuitsMan = () => {
    props.updateView('Wetsuits', 'Man');
  };
  const changeViewWetsuitsWoman = () => {
    props.updateView('Wetsuits', 'Woman');
  };
  const changeViewWetsuitsJunior = () => {
    props.updateView('Wetsuits', 'Junior');
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
                <Link to='/' onClick={changeViewSurfBoards}>
                  Boards
                </Link>
                <Link to='/' onClick={changeViewSurfFins}>
                  Fins
                </Link>
                <Link to='/' onClick={changeViewSurfWax}>
                  Wax
                </Link>
                <Link to='/' onClick={changeViewSurfAccessories}>
                  Accessories
                </Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Bodyboard
              </Link>
              <div className='dropdown-content'>
                <Link to='/' onClick={changeViewBodyboardBoards}>
                  Boards
                </Link>
                <Link to='/' onClick={changeViewBodyboardAccessories}>
                  Accessories
                </Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Stand-up
              </Link>
              <div className='dropdown-content'>
                <Link to='/' onClick={changeViewStandInflatableSup}>
                  Inflatable Sup{' '}
                </Link>
                <Link to='/' onClick={changeViewStandHardBoards}>
                  Hard Boards
                </Link>
                <Link to='/' onClick={changeViewStandPaddles}>
                  Paddles
                </Link>
                <Link to='/' onClick={changeViewStandAccessories}>
                  Accessories
                </Link>
                <Link to='/' onClick={changeViewStandClothing}>
                  Clothing
                </Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Skate
              </Link>
              <div className='dropdown-content'>
                <Link to='/' onClick={changeViewSkateboards}>
                  Skateboards
                </Link>
                <Link to='/' onClick={changeViewSkateDecks}>
                  Decks
                </Link>
                <Link to='/' onClick={changeViewSkateWheels}>
                  Wheels
                </Link>
                <Link to='/' onClick={changeViewSkateTrucks}>
                  Trucks
                </Link>
                <Link to='/' onClick={changeViewSkateGripTape}>
                  Grip Tape
                </Link>
                <Link to='/' onClick={changeViewSkateAccessories}>
                  Accessories
                </Link>
              </div>
            </li>
            <li className='dropdown'>
              <Link to='' className='dropbtn'>
                Wetsuits
              </Link>
              <div className='dropdown-content'>
                <Link to='/' onClick={changeViewWetsuitsMan}>
                  Man
                </Link>
                <Link to='/' onClick={changeViewWetsuitsWoman}>
                  Woman
                </Link>
                <Link to='/' onClick={changeViewWetsuitsJunior}>
                  Junior
                </Link>
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
            <i className='fas fa-shopping-cart'></i>
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
