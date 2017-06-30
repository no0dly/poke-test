import * as redux from 'redux'
import thunk from 'redux-thunk'

import {
  pokemonListReducer,
  pageReducer,
  itemsPerPageReducer,
  searchTextReducer
} from '../reducers'

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    pokeList: pokemonListReducer,
    currentPage: pageReducer,
    itemsPerPage: itemsPerPageReducer,
    searchText: searchTextReducer
  })

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
