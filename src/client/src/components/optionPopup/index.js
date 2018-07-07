import React , { Component } from 'react'

import './style.css'

export default class OptionPopup extends Component {

  render(){

    return (
    <div className='ayah-options-popup-container'>
        <div className='arrow-down'></div>
        <div className='popup-menu'>
          <span className='popup-menu-item'>
            <i className="fas fa-copy"></i>
            <span className='popup-menu-item-content'>
            نسخ
            </span>
          </span>
          <span className='popup-menu-item'>
            <i className="fas fa-share-alt"></i>
            <span className='popup-menu-item-content'>
            مشاركة
            </span>
          </span>
          <span className='popup-menu-item'>
            <i className="fas fa-clipboard-list"></i>
            <span className='popup-menu-item-content'>
            تفسير
            </span>
          </span>
        </div>
    </div>
    )
  }
}