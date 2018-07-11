import React , { Component } from 'react';
import Word from '../word';
import OptionPopup from '../optionPopup';
import TafsierContainer from '../tafsierContainer/';
import ReactDOM from "react-dom";

import './style.css'

const ayahToWords = ayah => ayah.originalText.split(' ').map(word=>({text : word.trim() , ayahId :ayah.numberInSurah }))
const ayahsWords = ayahs => ayahs.reduce((ayahsWords , ayah) => [...ayahsWords ,...ayahToWords(ayah)], [])
const fixPosition = position => ({ top : position.top - 70 , left : 220  })

export default class Words extends Component {
  state = {
    visible: false,
    activeAyah: {},
    showPopUp: false,
    tfsMode: window.location.pathname,
    popPosition: {}
  }
  openTafsier = () => {
    this.setState({ visible: !this.state.visible });
    console.log(this.state);
  }

  componentDidMount = () => ReactDOM.findDOMNode(this).onscroll = console.log //() => this.setState({ showPopUp : false })

  popAyahOptions = ({ayahId , position } ) => {
    if(this.state.activeAyah.numberInSurah !== ayahId){
      console.log('test');
      this.setState({
        visible: true,
        activeAyah: this.props.ayahs.filter(ayah => ayah.numberInSurah === ayahId )[0] || {} ,
        showPopUp: true ,
        popPosition : fixPosition(position)
      })
    }
    else
    this.setState({ showPopUp : !this.state.showPopUp })
  }

  onClickHandler = () => {
    const ayahId = this.ayahToWords(this.props.ayahs);
    const position = this.fixPosition(position);
    if (this.state.tfsMode === '/read') {
      this.popAyahOptions(ayahId, position);
    } else {
      this.openTafsier();
    }
  }

  render(){
    console.log('this.state.tfsMode', this.state.tfsMode);
    console.log('this.statee', this.state);
    const words = ayahsWords(this.props.ayahs) || []
    return (
      <div>
      <div className='words-holder-container'>

        {this.state.tfsMode === '/read' ?
          <OptionPopup position={this.state.popPosition} ayah= {''}/>
          :
          <TafsierContainer visibility={this.state.visible} />
      }

        {words.map((word,id) =>
          <Word
          key={id}
          onClick={this.onClickHandler}
          id={id}
          word={word}
          ayahId={this.state.activeAyah.numberInSurah}/>
        )}
        </div>
      </div>
    )
  }
}
