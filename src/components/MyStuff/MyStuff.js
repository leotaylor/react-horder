import React from 'react';

import './MyStuff.css';

class MyStuff extends React.Component {
  // renderMyStuff = (key) => {
  //   const stuff = this.props.things.find(x => x.id === key);

  //   return (
  //     <li
  //       key={key}
  //     >
  //       <div>
  //         {stuff.itemName}
  //       </div>
  //     </li>
  //   );
  // }
  render () {
    // const stuffIds = Object.keys(this.props.myStuff);
    return (
      <div className='MyStuff'>
        <h2 >My Stuff</h2>
        {/* <ul>
          {stuffIds.map(this.renderMyStuff)}
        </ul> */}
      </div>
    );
  }
}

export default MyStuff;
