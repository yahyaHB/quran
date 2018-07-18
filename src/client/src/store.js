import { applyMiddleware, createStore , combineReducers } from 'redux'
import * as reducers from './reducers'
import * as middlewares from './middlewares'
import logger from 'redux-logger'


export default createStore(reducers.default , applyMiddleware(...middlewares))
