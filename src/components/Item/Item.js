import React from 'react';

import './Item.css';

class Item extends React.Component {

  addClickEvent = () => {
    this.props.addToMyStuff(this.props.details);
  }

  render () {
    const { details } = this.props;
    return (
      <li className='Item'>
        <img src={details.itemImage} alt={details.itemName}/>
        <h3>{details.itemName}</h3>
        <p>{details.itemDescription}</p>
        <button className="btn btn-default" onClick={this.addClickEvent}>Gimme Gimme</button>
      </li>
    );
  }
}

export default Item;
