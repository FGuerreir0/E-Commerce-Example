import React, { Component } from 'react';
//COMPONENTS
import Jumbotron from './../../Components/Jumbotron';
import Filters from './../../Components/Filters';

//SERVICE
import { getAll } from './../../Services/products';
import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    getAll()
      .then((all) => {
        this.setState({
          products: [...all]
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const products = this.state.products;
    return (
      <div>
        <Jumbotron />
        <div className='home_view'>
          <Filters />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {(products.length > 0 &&
              products.map((product) => (
                <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'row' }}>
                  <img src={product.photo} style={{ height: '250px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <p>{product.name}</p>
                    <p>
                      Price: {product.price.amount / 100}
                      {product.price.currency}
                    </p>
                  </div>
                </div>
              ))) || (
              <div>
                <p>LOADING PRODUCTS...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
