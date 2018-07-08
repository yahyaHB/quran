import React , { Component } from 'react'
import OptionPopup from '../optionPopup'
import './style.css'
import ReactDOM from "react-dom";

export default class Word extends Component {

  showOptions = () => {
    const position = ReactDOM.findDOMNode(this).getBoundingClientRect() ,
          ayahId    = this.props.word.ayahId
          
    this.props.onClick({ayahId , position })
  }

  render(){
    const { id , ayahId , word } = this.props
    const style = {
      background : word.ayahId === ayahId ? ' #00000026' : 'transparent'
    }

    return (
      <span
        style={style}
        key={id}
        className={'ayah-word '+'ayah-'+word.ayahId}
        onClick={this.showOptions}
        >
        {word.text}
        {/* { this.state.visable && <OptionPopup  ayah= {''}/>} */}
      </span>
    )
  }
}
