import React , { Component } from 'react'
import './style.css'

export default class Copy extends Component {
state = {
  visable : false
}

 render(){
   const { id , ayahId , word } = this.props;

   return (
     <div className='top-space'>
     <span className='popup-menu-item'>
       <i className="fas fa-copy"></i>
       <span className='popup-menu-item-content'>
       نسخ
       </span>
     </span>
     </div>
   )
 }
}
