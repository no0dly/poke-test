import pokeApi from '../api/http'

export const fetchPokeNamesList = (initialItemsPerPage) => {
  return (dispatch, getState) => {
    pokeApi.fetchData().then((response) => {
      let pokeNamesList = response.data.results
      return pokeNamesList.map((pokemon, idx) => {
        if (idx > initialItemsPerPage - 1) { return false }
        pokeApi.request(pokemon.url)
        .then((description) => {
          const reqData = description.data

          pokeNamesList[idx].types = reqData.types.map(
            (type) => {
              return type.type.name
            }).join(', ')

          reqData.stats.map((stat) => {
            pokeNamesList[idx][stat.stat.name] = stat.base_stat
          })

          pokeNamesList[idx].id = reqData.id
          pokeNamesList[idx].image = reqData.sprites.front_default

          if (idx === initialItemsPerPage - 1) {
            dispatch(setPokeList(pokeNamesList))
          }
        })
      })
    })
  }
}

export const startUpdatePokeList = (page, sizePerPage) => {
  return (dispatch, getState) => {
    const minNumber = (page * sizePerPage) - sizePerPage
    const maxNumber = page * sizePerPage
    const pokeNamesList = getState().pokeList

    return pokeNamesList.map((pokemon, idx) => {
      if (idx > minNumber - 1 && idx < maxNumber) {
        if (!pokeNamesList[idx].id) {
          pokeApi.request(pokemon.url)
          .then((description) => {
            const reqData = description.data

            pokeNamesList[idx].types = reqData.types.map(
              (type) => {
                return type.type.name
              }).join(', ')

            reqData.stats.map((stat) => {
              pokeNamesList[idx][stat.stat.name] = stat.base_stat
            })

            pokeNamesList[idx].id = reqData.id
            pokeNamesList[idx].image = reqData.sprites.front_default

            dispatch(updatePokeList(pokeNamesList))
          })
        }
      }
    })
  }
}

export const setPokeList = (list) => {
  return {
    type: 'SET_INITIAL_POKE_LIST',
    list
  }
}

export const updatePokeList = (list) => {
  return {
    type: 'UPDATE_POKE_LIST',
    list
  }
}
