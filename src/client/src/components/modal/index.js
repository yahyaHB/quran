import React , { Component } from 'react'
import './style.css'
import ReactDOM from "react-dom";

export default class TafsirModal extends Component {
  render(){


    return(
      <div className='tafsir-modal'>
        <div className='modal-content'>
          <div className='main-content-holder'>
            <div onClick={this.props.closeModal} className='close-btn'>X</div>
            <div className='modal-main-content'>
              {this.props.tafsir}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
