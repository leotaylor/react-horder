import React from 'react';
import {Link} from 'react-router-dom';

import authRequests from '../../firebaseRequests/auth';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const {authed, runAway} = this.props;
    const logoutClickEvent = (e) => {
      authRequests.logoutUser();
      runAway();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Hoarder</Link>
            </div>
            {
              authed ? (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/mystuff">My Stuff</Link>
                  </li>
                  <li>
                    <Link to="/allthestuff">All The Stuff</Link>
                  </li>
                  <li className="navbar-form">
                    <button
                      onClick={logoutClickEvent}
                      className="btn btn-danger"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              )
            }
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
