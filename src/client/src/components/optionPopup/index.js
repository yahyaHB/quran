import React , { Component } from 'react'
import TafsierOptions from '../tafsierOptions'
import './style.css'

export default class OptionPopup extends Component {
  state = {
    tafsierOptionsVisibility: false
  }
  toggleTafsirOptions = () => this.setState({ tafsierOptionsVisibility: !this.state.tafsierOptionsVisibility })

  render(){
    const style = {
      top: this.props.position.top,
      left: this.props.position.left
    }

    return (
    <div style={style} className='ayah-options-popup-container'>
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
          <span onClick={this.toggleTafsirOptions} className='popup-menu-item'>
            <i className="fas fa-clipboard-list"></i>
            <span className='popup-menu-item-content'>
            تفسير
            </span>
          </span>
        </div>
      {this.state.tafsierOptionsVisibility && <TafsierOptions closeModal={this.towggleTafsirOptions} tafsir={this.props.tafsir} /> }
    </div>
    )
  }
}
