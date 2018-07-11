import React ,{ Component } from 'react';
import { ScaleLoader } from 'react-spinners';
import NavBar from '../../components/navBar';
import Page from '../../components/page';

import './style.css'
export default class Home extends Component {
state = {
isFetching: true,
surah : {
  name : 'test',
  numberOfAyahs :0 ,
  revelationType : 'makan el nozol'
},
currentPage : 5 ,
page : {}
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
        <div>
        {!isFetching ?
          <div className='reading-page'>
          <NavBar surah={surah} goToSurah={this.goToSurah}/>
          <Page page={this.state.page} />
          </div>
          :
          <center className='loader-component center'>
            <ScaleLoader color={'#66D49D'} loading={isFetching} width={4} />
            </center>
          }
          </div>
       </div>
     )
  }
}
