import React, { Component } from 'react';
import { register } from './../../Services/authentication';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }
  submithandler = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log(username, email, password);

    register({ username, email, password })
      .then((user) => {
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
    console.log(this.state.username);
  };

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.submithandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            type='text'
            onChange={this.handleInputChange}
            placeholder='Insert username here'
            value={this.state.username}
            required
          />
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={this.handleInputChange}
            placeholder='Insert a valid email'
            value={this.state.email}
            required
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

export default Register;
