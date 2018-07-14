import React , { Component } from 'react'
import TafsirModal from '../modal'
import './style.css'



export default class tafsierOptions extends Component {

  state = {
    showTafsirModal : false,
    currenTafsir : {}
  }

  toggleTafsirModal = () => this.setState({ showTafsirModal: !this.state.showTafsirModal })

    onClick = choice => this.setState({ showTafsirModal:true , currenTafsir : this.props.tafsir[choice]})
  render(){
    return (
    <div className='ayah-options-popup-container'>
        <div className='popup-menu'>
          <span onClick={() => this.onClick('ibnkther')} className='popup-menu-item'>
            <i className="fas fa-copy"></i>
            <span className='popup-menu-item-content'>
            ابن كثير
            </span>
          </span>
          <span onClick={() => this.onClick('qortoby')} className='popup-menu-item'>
            <i className="fas fa-share-alt"></i>
            <span className='popup-menu-item-content'>
            القرطبي
            </span>
          </span>
          <span onClick={() => this.onClick('saadi')} className='popup-menu-item'>
            <i className="fas fa-clipboard-list"></i>
            <span className='popup-menu-item-content'>
            السعدي
            </span>
          </span>
        </div>
      {this.state.showTafsirModal && <TafsirModal closeModal={this.toggleTafsirModal} tafsir={this.state.currenTafsir} /> }
    </div>
    )
  }
}
