import React from 'react';

import stuffRequest from '../../firebaseRequests/stuff';
import Stuff from '../Item/Item';
// import MyStuff from '../MyStuff/MyStuff';

import './AllTheStuff.css';

class AllTheStuff extends React.Component {
  state = {
    things: [],
    // myStuff: {},
  }

  // addToMyStuff = (key) => {
  //   const newStuff = {...this.state.myStuff};
  //   newStuff[key] = newStuff[key] + 1 || 1;
  //   this.setState({ myStuff: newStuff });
  // };

  componentDidMount () {
    stuffRequest
      .getRequest()
      .then((things) => {
        this.setState({things});
      })
      .catch((err) => {
        console.error('error with stuff get request', err);
      });
  }

  render () {
    const stuffComponents = this.state.things.map((stuff) => {
      return (
        // <h2>{stuff.itemName}</h2>
        <Stuff
          key={stuff.id}
          details={stuff}
          // addToMyStuff={this.addToMyStuff}
        />
      );
    });
    return (
      <div className='AllTheStuff col-xs-12'>
        <h1>All The Stuff</h1>
        <ul>
          {stuffComponents}
        </ul>
        {/* <MyStuff
          things={this.state.things}
          myStuff={this.state.myStuff}
        /> */}
      </div>
    );
  }
}

export default AllTheStuff;
