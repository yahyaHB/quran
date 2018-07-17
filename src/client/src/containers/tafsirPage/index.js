import React ,{ Component } from 'react'
import NavBar from '../../components/navBar'
import { apiRequest } from '../../actions'
import Page from '../../components/page'
import TafsirComponent from '../../components/tafsirComponent'

import './style.css'
export default class TafsirPage extends Component {
  state = {
    currentPage : this.props.currentPage || 2,
      surah : {
        name : 'test',
        numberOfAyahs : 0 ,
        revelationType :0
      } ,
      page : {
        ayahs : [] ,
        firstPage : 1 ,
        currentPage : 1
      },
      tafsir : {}
  }

  componentDidMount(){
    apiRequest('' , this.state.currentPage)
    .then(page => {
      this.setState({surah : {
        name : page.ayahs[0].surah.name,
        numberOfAyahs :page.ayahs[0].surah.numberOfAyahs ,
        revelationType :page.ayahs[0].surah.revelationType
      } ,
      page : {
        ayahs : page.ayahs ,
        firstPage : page.number ,
        currentPage : page.number
      }})
    })
  }
  chooseTafsir = choice => this.setState({ AyahTafsir :this.state.tafsir&& this.state.tafsir[choice]})
  goToPage = page => this.setState({ currentPage : page })
  displayTafsir= (ayah) =>this.setState({ tafsir : ayah.tafsier})
  render(){
    const { name , numberOfAyahs , revelationType  }  = this.state.surah
    const surah = { name , numberOfAyahs , revelationType }
    return (
      <div className='tafsir-page'>
        <NavBar surah={surah}/>
        <div className='tafsir-main-container'>
          <Page page={this.state.page}
            isOnTafsirMod={true}
            displayTafsir={this.displayTafsir}
           />
          <TafsirComponent tafsir={this.state.AyahTafsir} chooseTafsir={this.chooseTafsir}/>
        </div>
      </div>
    )
  }
}
