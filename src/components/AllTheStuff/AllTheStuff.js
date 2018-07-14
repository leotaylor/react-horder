import React from 'react';

import stuffRequest from '../../firebaseRequests/stuff';
import Item from '../Item/Item';
import MyStuff from '../MyStuff/MyStuff';
import authRequest from '../../firebaseRequests/auth';
import mystuffRequest from '../../firebaseRequests/mystuff';

import './AllTheStuff.css';

class AllTheStuff extends React.Component {
  state = {
    things: [],
    myStuff: {},
  }

  addToMyStuff = (newThing) => {
    // const newThing = {things: {...this.state.myStuff}};
    newThing.uid = authRequest.getUid();
    mystuffRequest
      .postRequest(newThing)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((err) => {
        console.error('error in myStuff post', err);
      });
  }

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
        <Item
          key={stuff.id}
          details={stuff}
          addToMyStuff={this.addToMyStuff}
        />
      );
    });
    return (
      <div className='AllTheStuff col-xs-12'>
        <h1>All The Stuff</h1>
        <ul>
          {stuffComponents}
        </ul>
        <MyStuff
          things={this.state.things}
          myStuff={this.state.myStuff}
        />
      </div>
    );
  }
}

export default AllTheStuff;
