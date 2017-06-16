import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

export default function configureStore(initialState) {
  return applyMiddleware(thunkMiddleware)(createStore)(rootReducer, initialState)
}
