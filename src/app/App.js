import React, { Component } from 'react';
import './App.css';

import AllTheStuff from '../components/AllTheStuff/AllTheStuff';
import MyStuff from '../components/MyStuff/MyStuff';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AllTheStuff />
        <MyStuff />
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
