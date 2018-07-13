import React from 'react';

import './Item.css';

class Item extends React.Component {

  addClickEvent = () => {
    this.props.addToMyStuff(this.props.details.id);
  }

  render () {
    const { details } = this.props;
    const image = require(`${details.imageName}`);
    return (
      <li className='Item' onClick={this.addClickEvent}>
        <img src={image} alt={details.itemName}/>
        <h3>{details.itemName}</h3>
        <p>{details.itemDescription}</p>
      </li>
    );
  }
}

export default Item;
