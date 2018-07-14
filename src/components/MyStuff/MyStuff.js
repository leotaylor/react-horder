import React from 'react';

import authRequest from '../../firebaseRequests/auth';
import myStuffRequest from '../../firebaseRequests/mystuff';

import './MyStuff.css';

class MyStuff extends React.Component {
  state = {
    myStuff: [],
  }

  componentDidMount () {
    myStuffRequest
      .getRequest(authRequest.getUid())
      .then((myStuff) => {
        this.setState({myStuff});
      })
      .catch((err) => {
        console.error('error with mystuff get request', err);
      });
  }

  renderMyStuff = (obj) => {
    // const stuff = this.props.things.find(x => x.id === key);
    return (
      <li
        key={obj.id}
      >
        <div className="myThings">
          <img src={obj.itemImage} alt={obj.itemName}/>
          <h3>{obj.itemName}</h3>
          <p>{obj.itemDescription}</p>
          <button className="btn btn-danger">Purge</button>
        </div>
      </li>
    );
  }
  render () {
    const stuffObjects = this.state.myStuff;
    return (
      <div className='MyStuff'>
        <h2 >My Stuff</h2>
        <ul>
          {stuffObjects.map(this.renderMyStuff)}
        </ul>
      </div>
    );
  }
}

export default MyStuff;
