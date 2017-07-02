export const pokemonListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_INITIAL_POKE_LIST':
      return [...action.list]
    case 'UPDATE_POKE_LIST':
      return [...action.list]
    default:
      return state
  }
}

export const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return action.page
    case 'RESET_PAGE':
      return 1
    default:
      return state
  }
}

export const itemsPerPageReducer = (state = 10, action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS_PER_PAGE':
      return action.perPage
    case 'RESET_ITEMS_PER_PAGE':
      return 10
    default:
      return state
  }
}

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText
    default:
      return state
  }
}

export const listLengthReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_LIST_LENGTH':
      return action.listLength
    case 'UPDATE_LIST_LENGTH':
      return action.listLength
    default:
      return state
  }
}

export const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADER':
      return !state
    default:
      return state
  }
}
