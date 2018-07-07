import React , { Component } from 'react'
import Word from '../word'


import './style.css'

const ayahToWords = ayah => ayah.originalText.split(' ').map(word=>({text : word.trim() , ayahId :ayah.numberInSurah }))
const ayahsWords = ayahs => ayahs.reduce((ayahsWords , ayah) => [...ayahsWords ,...ayahToWords(ayah)], [])


export default class Words extends Component {
  state = {
    activeAyah : {}
  }

  showAyahTafsir = (ayahId ) => {
    this.setState({
      activeAyah : this.props.ayahs.filter(ayah => ayah.numberInSurah === ayahId )[0] || {}
    })
    console.log(this.state);
  }

  render(){
    const words =ayahsWords(this.props.ayahs) || []
    return (
      <div className='words-holder-container'>
        {words.map((word,id) =>
          <Word
          onClick={this.showAyahTafsir}
          id={id}
          word={word}
          ayahId={this.state.activeAyah.numberInSurah}/>
        )}
      </div>
    )
  }
}
