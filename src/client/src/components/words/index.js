import React , { Component } from 'react'
import Word from '../word'
import OptionPopup from '../optionPopup'
import ReactDOM from "react-dom";

import './style.css'

const ayahToWords = ayah => ayah.originalText.split(' ').map(word=>({text : word.trim() , ayahId :ayah.numberInSurah }))
const ayahsWords = ayahs => ayahs.reduce((ayahsWords , ayah) => [...ayahsWords ,...ayahToWords(ayah)], [])
const fixPosition = position => ({ top : position.top - 70 , left : 220  })

export default class Words extends Component {
  state = {
    activeAyah : {},
    showPopUp : false
  }
  componentDidMount = () => ReactDOM.findDOMNode(this).onscroll = console.log

  popAyahOptions = ({ayahId , position } ) => {
    if(this.state.activeAyah.numberInSurah !== ayahId){
      this.setState({
        activeAyah : this.props.ayahs.filter(ayah => ayah.numberInSurah === ayahId )[0] || {} ,
        showPopUp : true ,
        popPosition : fixPosition(position)
      })
      if(this.props.isOnTafsirMod)
        this.props.displayTafsir(this.state.activeAyah);
    }
    else
    this.setState({ showPopUp : !this.state.showPopUp })
  }

  render(){
    const words =ayahsWords(this.props.ayahs) || []
    return (
      <div className='words-holder-container'>
        {!this.props.isOnTafsirMod && this.state.showPopUp && <OptionPopup  position={this.state.popPosition} ayah= {''} tafsir={this.state.activeAyah.tafsier}/>}
        {words.map((word,id) =>
          <Word
          key={id}
          onClick={this.popAyahOptions}
          id={id}
          word={word}
          ayahId={this.state.activeAyah.numberInSurah}/>
        )}
      </div>
    )
  }
}
