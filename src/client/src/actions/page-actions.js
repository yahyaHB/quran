
import { APP_LOADING , PAGE_API_REQUEST } from '../constants'


 const initializeTheApp = () => ({
  type : APP_LOADING
})

 const getPageNumber = (number) => ({
  type : PAGE_API_REQUEST , payload : number
})


export default {
  
}
