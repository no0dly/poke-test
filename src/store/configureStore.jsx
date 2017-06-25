import * as redux from 'redux'
// import thunk from 'redux-thunk';

import { searchReducer } from '../reducers'

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    searchExpanded: searchReducer
  })

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
