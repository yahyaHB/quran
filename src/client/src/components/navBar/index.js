import React, { Component } from 'react';
import Menu from '../menu';

import './style.css';

class NavBar extends Component {
  render() {
    console.log(this.props.surah );
    const { name, numberOfAyahs, revelationType } = this.props.surah

    const origin = {
      'Medinan' : 'مدنية' ,
      'Makki' : 'مكية'
    }[revelationType] || 'غير متوفر'

    return (
      <div>
        <header>
          <Menu goToSurah={this.props.goToSurah}/>

          <div className='name-sourh'>
            <div className='cont'>
              {origin}
            </div>
            <div className='name'>
              {name}
            </div>
            <div className='num-ayat'>
              {numberOfAyahs}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
