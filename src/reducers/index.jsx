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
