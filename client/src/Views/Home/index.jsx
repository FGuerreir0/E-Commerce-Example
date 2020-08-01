import React, { Component } from 'react';
//COMPONENTS
import Jumbotron from './../../Components/Jumbotron';
import Filters from './../../Components/Filters';

//SERVICE
import { getAll, getCategory } from './../../Services/products';

import './style.scss';
let category = 'All';
let subCategory = 'getAll';

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

  componentDidUpdate() {
    this.searchViewData();
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

  searchViewData() {
    if (category !== this.props.search[0] || subCategory !== this.props.search[1]) {
      category = this.props.search[0];
      subCategory = this.props.search[1];
      console.log(category, subCategory);
      if (category === 'All') {
        this.fetchData();
      } else {
        getCategory({ category, subCategory })
          .then((all) => {
            this.setState({
              products: [...all]
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      return 'categoria já em vista';
    }
  }

  render() {
    const products = this.state.products;
    return (
      <div>
        <Jumbotron />
        <div className='home_view'>
          <Filters />
          <div className='list'>
            {(products.length > 0 &&
              products.map((product) => (
                <div
                  key={product._id}
                  style={{
                    border: '1px solid gray',
                    width: '300px',
                    margin: ' 20px 20px',
                    textAlign: 'center',
                    backgroundColor: '#fff'
                  }}
                >
                  <img
                    src={product.photo}
                    alt=''
                    style={{ height: '250px', marginBottom: '5px' }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'black',
                      color: '#fff',
                      padding: '10px 0',
                      zIndex: '-1',
                      opacity: '0.5',
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px'
                    }}
                  >
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
