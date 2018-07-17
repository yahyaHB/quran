import { applyMiddleware, createStore , combineReducers } from 'redux'
import * as reducers from './reducers'
import * as middlewares from './middlewares'



export default createStore(reducers.default , applyMiddleware(...middlewares))
