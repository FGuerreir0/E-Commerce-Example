import React from 'react';
import example from './example3.mp4';
import './style.scss';

function Jumbotron() {
  return (
    <div>
      <div className='jumbotron_news'>
        <small>Free Shipping for Europe now!</small>
      </div>
      <video autoPlay loop muted className='jumbotron_video'>
        <source src={example} type='video/mp4' />
      </video>
      <div className='jumbotron_fade'></div>
    </div>
  );
}

export default Jumbotron;
