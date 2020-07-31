import React from 'react';
import './style.scss';

export default function Filters() {
  return (
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

      <div className='searchBar'>
        <input style={{ border: 'none' }}></input>
        <i
          class='fas fa-search'
          style={{
            backgroundColor: 'white'
          }}
        ></i>
      </div>
    </div>
  );
}
