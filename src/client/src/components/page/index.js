import React , { Component } from 'react'

import NavBar from '../navBar'
import Words from '../words'

import './style.css'

export default class Page extends Component {


  render(){
    return (
      <div className='page-container'>
        <div className='ayat-holder'>
          <div className='ayat-header'>
            <span className='basmla'>بسم الله الرحمن الرحيم</span>
          </div>
          <div className='ayat-list-holder'>
             <Words ayat={this.props.ayat}/>
          </div>
        </div>
      </div>
    )
  }
}
