import React, { Component } from 'react';
import { login } from './../../Services/authentication';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    };
  }
  submithandler = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    login({ email, password })
      .then((user) => {
        console.log(user);
        this.props.updateUser(user);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.submithandler}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={this.handleInputChange}
            placeholder='Insert a valid email'
            value={this.state.email}
            required
            style={{ width: '100px', border: '1 solid black' }}
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={this.handleInputChange}
            placeholder='Insert a strong password'
            value={this.state.password}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
