import React , { Component } from 'react'
import { apiRequest } from '../../actions'
import * as readingPageActions from '../../actions/page-actions'
import { connect } from 'react-redux'

import NavBar from '../../components/navBar'
import Page from '../../components/page'

import './style.css'


class Home extends Component {
  state = {
     isMobile : true ,
     theFactory: 2,
    isFetching : true ,
    error:'',
    surah : {
      name : 'test',
      numberOfAyahs :0 ,
      revelationType : 'makan el nozol'
    },
    currentPage : 5 ,
    page_1 : {},
    page_2 : {}

  }

  goToSurah = (surahStartPage) => {
    console.log('change surah');
    this.setState({
      currentPage : this.state.currentPage + 1
    })
    this.goToPage(++this.state.currentPage)
  }
  componentDidMount = () => {
    this.props.initializeTheApp()
    // Detcteng the if the device is mobile
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
     &&
     this.setState({ isMobile : true , theFactory: 1 })

    //this is temporarly changing the page to
     this.goToPage(7)
  }
  goToPage = (page) => {
     //  apiRequest('' , page)
     //  .then(page => this.setState({
     //    isFetching : false ,
     //    surah : {
     //      name : page.ayahs[0].surah.name,
     //      numberOfAyahs :page.ayahs[0].surah.numberOfAyahs ,
     //      revelationType :page.ayahs[0].surah.revelationType
     //    } ,
     //    page : {
     //      ayahs : page.ayahs ,
     //      firstPage : page.number ,
     //      currentPage : page.number
     //    }
     // }))
     // .catch(({ message }) => this.setState({isFetching:false , message}))
  }

  render(){
    console.log(this.props.state);
    const { name , numberOfAyahs , revelationType  }  = this.state.surah
    const surah = { name , numberOfAyahs , revelationType }
    const isFetching = this.state.isFetching

    return (
      <div>
      <NavBar surah={surah} goToSurah={this.goToSurah}/>
      {!isFetching ?
      <div className='reading-page'>
        <Page page={this.state.page} />
        <Page page={this.state.page} />
      </div>
      :
      <div >is isFetching</div>
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
})
export default connect(mapStateToProps,readingPageActions)(Home)
