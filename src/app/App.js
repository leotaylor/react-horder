import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';

import Navbar from '../components/Navbar/Navbar';
// import AllTheStuff from '../components/AllTheStuff/AllTheStuff';
import MyStuff from '../components/MyStuff/MyStuff';
// import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';

import fbConnection from '../firebaseRequests/connection';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/mystuff', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends Component {
  state={
    authed: false,
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <PrivateRoute
                    path='/mystuff'
                    authed={this.state.authed}
                    componenet={MyStuff}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
