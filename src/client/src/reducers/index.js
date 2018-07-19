import { combineReducers } from 'redux'

import page from './page'
import ayah from './ayah'
import tafsir from './tafsir'
import device from './device'


export default combineReducers({
  page,
  ayah,
  tafsir,
  device
})
