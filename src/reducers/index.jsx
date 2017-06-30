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
    case 'RESET PAGE':
      return 0
    default:
      return state
  }
}
