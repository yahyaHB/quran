import { UPDATE_PAGE } from '../constants'


const initialState = {
  currentPage : {}
}


export default (state = initialState  , { type , payload }) =>{

  switch (type) {
    case UPDATE_PAGE:
    return {
      ...state,
      currentPage : payload
    }
    default: return state

  }
}
