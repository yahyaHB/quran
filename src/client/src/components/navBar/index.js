import React, { Component } from 'react';
import Menu from '../menu';

import './style.css';

class NavBar extends Component {
  render() {
    console.log(this.props.surah );
    const { origin, name, ayatNumber } = this.props.surah
    return (
      <div>
        <header>
          <Menu />

          <div className='name-sourh'>
            <div className='cont'>
              {origin}
            </div>
            <div className='name'>
              {name}
            </div>
            <div className='num-ayat'>
              {ayatNumber}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
