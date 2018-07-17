
import { APP_LOADING , PAGE_API_REQUEST } from '../constants'


export const initializeTheApp = () => dispatch({
  type : APP_LOADING
})

export const getPageNumber = (number) => dispatch({
  type : PAGE_API_REQUEST , payload : number
})
