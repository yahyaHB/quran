import React, { Component } from 'react';
import axios from 'axios';

import './style.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      souarNames: []
    };
  }

  componentDidMount() {
    axios.get('https://qurn.herokuapp.com/api?api_key=yahia@eslam')
      .then(res => {
        this.setState({ souarNames: res.data.refrances });
      });
  }

  state = {
    opend: false
  }

  toggleMenu = () => {
    this.setState({ opend: !this.state.opend });
  }
  render() {
    const { souarNames } = this.state;

    return (
      <div>
        <div className='brand'>
          الفهرس
          <div onClick={this.toggleMenu} className={this.state.opend ? 'icons open' : 'icons'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='menu'>
          <div className={this.state.opend ? 'menu-1 menu-valid': 'menu-1'}>
            <div className='list-menu'>
              <ul>
                {
                  souarNames.map((surahname, id) => {
                    return (<li onClick={()=>this.props.goToSurah(surahname.number)} key={id}>
                      <div className='list-box'>
                        <div className='list-number-box'>{surahname.number}</div>
                        <a href='#'>
                          <span className='span-right-list'>{surahname.surahName}</span>
                        </a>
                      </div>
                      <div className='clearfix'></div>
                    </li>);
                  })
                }
                <li>
                  <div className='list-box'>
                    <div className='list-number-box'>115</div>
                    <a href='#'>
                      <span className='span-right-list'>الخاتمة</span>
                    </a>
                  </div>
                  <div className='clearfix'></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
