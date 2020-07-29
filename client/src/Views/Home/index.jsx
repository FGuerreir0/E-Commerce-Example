import React from 'react';
import Jumbotron from './../../Components/Jumbotron';

function Home(props) {
  console.log(props);
  return (
    <div>
      <Jumbotron />
      <div className='home_view'>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
