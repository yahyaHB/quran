import React , { Component } from 'react'

import NavBar from '../navBar'
import Words from '../words'

import './style.css'

export default class Page extends Component {


  render(){
    console.log('Page' ,this.props);
    const { ayahs , currentPage , firstPage } = this.props.page
    return (
      <div className='page-container'>
        <div className='ayat-holder'>
          <div className='ayat-header'>
            <span className='basmla'>بسم الله الرحمن الرحيم</span>
          </div>
          <div className='ayat-list-holder'>
             <Words ayahs={ayahs}/>
          </div>
        </div>
      </div>
    )
  }
}
