import React from 'react';

import stuffRequest from '../../firebaseRequests/stuff';

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
        <h2>{stuff.itemName}</h2>
      );
    });
    return (
      <div className='AllTheStuff'>
        {stuffComponents}
      </div>
    );
  }
}

export default AllTheStuff;
