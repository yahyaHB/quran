import {
   PAGE_API_REQUEST,
   UPDATE_PAGE,
  FAILD_TO_UPDATE } from '../constants'
import apiRequest from './apiRequest'

export default ({ getState, dispatch }) => next => ({ type , payload }) => {
  if(type === PAGE_API_REQUEST){
    apiRequest(payload)
    .then(({page})=> dispatch({ type : UPDATE_PAGE ,payload : page}))
    .then( err => dispatch({ type : FAILD_TO_UPDATE ,payload : err}))
  }else
  next()
}
