import React , { Component } from 'react'

export default props => (
  <div className='tafsir-component'>
    <div className='tafsirs-options'>
      <ul>
        <li onClick={()=>props.chooseTafsir('ibnkther')} >OP1</li>
        <li onClick={()=>props.chooseTafsir('qortoby')} >OP2</li>
        <li onClick={()=>props.chooseTafsir('saadi')} >OP3</li>
      </ul>
    </div>
    <div className='tafsir-content'>
      {props.tafsir}
    </div>
  </div>
)
