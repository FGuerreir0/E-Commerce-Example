import React, { Component } from 'react';
import { register } from './../../Services/authentication';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: ''
    };
  }
  submithandler = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    register({ name, email, password })
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
  };

  render() {
    return (
      <div style={{ marginTop: '70px' }}>
        <h3>Register</h3>
        <form onSubmit={this.submithandler}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            type='text'
            onChange={this.handleInputChange}
            placeholder='Insert name here'
            value={this.state.name}
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
