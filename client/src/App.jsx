import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

//SERVICES
import { loadAuthenticatedUser } from './Services/authentication';

//COMPONENTS
import Navbar from './Components/Navbar';

//VIEWS
import Home from './Views/Home';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    loadAuthenticatedUser()
      .then((user) => {
        this.updateUser(user);
        this.setState({
          loaded: true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar user={this.state.user} updateUser={this.updateUser} />

          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} />} />

            <Route
              exact
              path='/authentication/register'
              render={(props) => <RegisterView {...props} updateUser={this.updateUser} />}
            />
            <Route
              exact
              path='/authentication/login'
              render={(props) => <LoginView {...props} updateUser={this.updateUser} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
