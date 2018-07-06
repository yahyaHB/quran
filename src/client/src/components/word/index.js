import React , { Component } from 'react'

import './style.css'

export default class Word extends Component {



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
        onClick={(e)=>{this.position(e) ; this.props.onClick(word.ayahId)}}
        >
        {word.text}
      </span>
    )
  }
}
