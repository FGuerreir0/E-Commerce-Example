import React from 'react';
import Jumbotron from './../../Components/Jumbotron';
import './style.scss';

function Home(props) {
  console.log(props);
  return (
    <div>
      <Jumbotron />
      <div className='home_view'>
        <div className='home_filter'>
          <div>
            <label htmlFor='filter' className='filter_label'>
              FILTER BY:
            </label>
            <select name='filter' id='filter' value='All'>
              <option>All Products</option>
              <option>Surf</option>
              <option>Bodyboard</option>
              <option>Stand-up</option>
              <option>Skate</option>
              <option>Wetsuits</option>
            </select>
          </div>

          <div>
            <label htmlFor='filter' className='filter_label'>
              SORT BY:
            </label>
            <select name='filter' id='filter' value='high'>
              <option>↑€ Price</option>
              <option>↓€ Price</option>
            </select>
          </div>
          <div
            style={{
              border: '1px solid black',
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              height: '25px',
              backgroundColor: 'white',
              paddingRight: '3px'
            }}
          >
            <input style={{ border: 'none' }}></input>
            <i
              class='fas fa-search'
              style={{
                backgroundColor: 'white'
              }}
            ></i>
          </div>
        </div>
        <div>Products</div>
      </div>
    </div>
  );
}

export default Home;
