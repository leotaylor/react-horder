import React from 'react';

import stuffRequest from '../../firebaseRequests/stuff';
import Stuff from '../Item/Item';

import './AllTheStuff.css';

class AllTheStuff extends React.Component {
  state = {
    stuff: [],
  }

  componentDidMount () {
    stuffRequest
      .getRequest()
      .then((stuff) => {
        this.setState({stuff});
      })
      .catch((err) => {
        console.error('error with stuff get request', err);
      });
  }

  render () {
    const stuffComponents = this.state.stuff.map((stuff) => {
      return (
        // <h2>{stuff.itemName}</h2>
        <Stuff
          key={stuff.id}
          details={stuff}
        />
      );
    });
    return (
      <div className='AllTheStuff col-xs-12'>
        <h1>All The Stuff</h1>
        <ul>
          {stuffComponents}
        </ul>
      </div>
    );
  }
}

export default AllTheStuff;
