import React from 'react';
import Jumbotron from './../../Components/Jumbotron';
import Filters from './../../Components/Filters';
import './style.scss';

function Home(props) {
  console.log(props);
  return (
    <div>
      <Jumbotron />
      <div className='home_view'>
        <Filters />
        <div>Products</div>
      </div>
    </div>
  );
}

export default Home;
