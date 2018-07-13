import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';

import Navbar from '../components/Navbar/Navbar';
// import AllTheStuff from '../components/AllTheStuff/AllTheStuff';
// import MyStuff from '../components/MyStuff/MyStuff';
// import Login from '../components/Login/Login';
// import Register from '../components/Register/Register';
import Home from '../components/Home/Home';

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <AllTheStuff /> */}
        {/* <MyStuff /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
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
