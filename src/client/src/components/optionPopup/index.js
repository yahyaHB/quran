import React , { Component } from 'react'
import Copy from '../copy';
import './style.css'

export default class OptionPopup extends Component {

  render(){
    const style = {
      top :  this.props.position.top,
      left : this.props.position.left  ,
    }
    return (
    <div style={style} className='ayah-options-popup-container'>
        <div className='arrow-down'></div>
        <div className='popup-menu'>
          <Copy />
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
