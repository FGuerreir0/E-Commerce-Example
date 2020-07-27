import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

//SERVICES
import { loadAuthenticatedUser } from './Services/authentication';

//COMPONENTS
import Navbar from './Components/Navbar';

//VIEWS
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
  /*
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
    this.setState(null);
  };
*/

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar user={this.state.user} />

          <Switch>
            <Route exact path='/register' render={(props) => <RegisterView {...props} />} />
            <Route exact path='/login' render={(props) => <LoginView {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
