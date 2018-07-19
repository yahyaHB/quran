
import { APP_LOADING , PAGE_API_REQUEST } from '../constants'


export const initializeTheApp = () => ({
  type : APP_LOADING
})

export const getPageNumber = (number) => ({
  type : PAGE_API_REQUEST , payload : number
})
