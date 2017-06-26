import pokeApi from '../api/http'

export const fetchPokeNamesList = (initialItemsPerPage) => {
  return (dispatch, getState) => {
    pokeApi.fetchData().then((response) => {
      let pokeNamesList = response.data.objects[0].pokemon
      return pokeNamesList.map((pokemon, idx) => {
        if (idx > initialItemsPerPage - 1) { return false }
        pokeApi.request(pokemon.resource_uri)
        .then((description) => {
          const reqData = description.data
          pokeNamesList[idx].type = reqData.types[0].name
          pokeNamesList[idx].atk = reqData.sp_atk
          pokeNamesList[idx].def = reqData.sp_def
          pokeNamesList[idx].speed = reqData.speed
          pokeNamesList[idx].pkdx_id = reqData.pkdx_id
          if(idx === initialItemsPerPage - 1) {
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
        if (!pokeNamesList[idx].pkdx_id) {
          pokeApi.request(pokemon.resource_uri)
          .then((description) => {
            const reqData = description.data
            pokeNamesList[idx].type = reqData.types[0].name
            pokeNamesList[idx].atk = reqData.sp_atk
            pokeNamesList[idx].def = reqData.sp_def
            pokeNamesList[idx].speed = reqData.speed
            pokeNamesList[idx].pkdx_id = reqData.pkdx_id

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
