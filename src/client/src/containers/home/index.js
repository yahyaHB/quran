import React ,{ Component } from 'react'
import { Link } from 'react-router-dom';

import './style.css'
export default class Home extends Component {


  render(){
    return (
      <div className='home-page-container'>
          <div className='home-content-holder'>
            <div className='logo'>

            </div>
            <div className='home-options-holder'>
              <div className='home-option'><Link className='remove-anchor-style' to='/read'> Tafsis Page </Link></div>
              <div className='home-option'><Link className='remove-anchor-style' to='/tafsir'>Reading Page </Link> </div>
            </div>
          </div>
      </div>
    );
  }
}
