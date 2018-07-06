import React , { Component } from 'react'

import NavBar from '../../components/navBar'
import Page from '../../components/page'

import './style.css'
export default class Home extends Component {
  state = {

    surah : {
      name : 'test',
      ayatNumber :0 ,
      origin : 'makan el nozol'
    },
    currentPage : 1 ,
    page : {}

  }

  goToSurah = (surahStartPage) => {

  }

  goToPage = (page) => {
    fetch(`https://qurn.herokuapp.com/api/page/${page || 2 }`)
    .then( res => res.json())
    .then(page => this.setState({ page }))
    .catch(err => alert(err.message))
  }
  
  render(){
    const { name , ayatNumber , origin , page }  = this.state.surah
    const surah = { name , ayatNumber , origin }

    return (
      <div className='reading-page'>
        <NavBar surah={surah} />
        <Page page={page} />
      </div>
    )
  }
}
