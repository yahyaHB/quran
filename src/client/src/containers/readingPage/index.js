import React , { Component } from 'react'

import NavBar from '../../components/navBar'
import Page from '../../components/page'

import './style.css'
export default class Home extends Component {
  state = {
    isFetching : true ,
    surah : {
      name : 'test',
      numberOfAyahs :0 ,
      revelationType : 'makan el nozol'
    },
    currentPage : 5 ,
    page : {}

  }

  goToSurah = (surahStartPage) => {
    console.log('change surah');
    this.setState({
      currentPage : this.state.currentPage + 1
    })
    this.goToPage(++this.state.currentPage)
  }
  componentDidMount = () => this.goToPage(7)
  goToPage = (page) => {

     fetch(`https://qurn.herokuapp.com/api/page/${page || 2 }` )
    .then( res => res.json())
    .then(({page}) =>{
      this.setState({
      isFetching : false ,
      surah : {
        name : page.ayahs[0].surah.name,
        numberOfAyahs :page.ayahs[0].surah.numberOfAyahs ,
        revelationType :page.ayahs[0].surah.revelationType
      } ,
      page : {
        ayahs : page.ayahs ,
        firstPage : page.number ,
        currentPage : page.number
      }
     })
     console.log('-------------------------' ,this.state);
   })
    .catch(err => console.error(err.message))
  }

  render(){
    const { name , numberOfAyahs , revelationType  }  = this.state.surah
    const surah = { name , numberOfAyahs , revelationType }
    const isFetching = this.state.isFetching

    return (
      <div>
      {!isFetching ?
      <div className='reading-page'>
        <NavBar surah={surah} goToSurah={this.goToSurah}/>
        <Page page={this.state.page} />
      </div>
      :
      <div >is isFetching</div>
      }
      </div>
    )
  }
}
