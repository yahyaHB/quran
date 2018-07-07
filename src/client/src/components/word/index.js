import React , { Component } from 'react'
import OptionPopup from '../optionPopup'
import './style.css'

export default class Word extends Component {
  state ={
      visable : false
  }

  togglePopUp = () => this.setState({ visable : !this.state.visable })

  position = e => {
    console.log({ x : e.target.pageX , y : e.target.pageY ,target :e.target});
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
        onClick={(e)=>{this.togglePopUp(e) ; this.props.onClick(word.ayahId)}}
        >
        {word.text}
        { this.state.visable && <OptionPopup  ayah= {''}/>}
      </span>
    )
  }
}
