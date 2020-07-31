import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';

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
      user: null,
      view: 'getAll'
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

  updateView = (search) => {
    this.setState({ view: search });
  };

  render() {
    console.log(this.state.view);
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar user={this.state.user} updateUser={this.updateUser} />
          <div className='component'>
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

              {/* Products Routes*/}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
