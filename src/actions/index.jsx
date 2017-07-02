import pokeApi from '../api/http'
import pokeFilter from '../api'

export const fetchPokeNamesList = (initialItemsPerPage) => {
  return (dispatch, getState) => {
    dispatch(toggleLoader())
    pokeApi.fetchData().then((response) => {
      let pokeNamesList = response.data.results
      return pokeNamesList.map((pokemon, idx) => {
        pokeNamesList[idx].id = idx + 1
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
            return true
          })

          pokeNamesList[idx].image = reqData.sprites.front_default

          if (idx === initialItemsPerPage - 1) {
            dispatch(setPokeList(pokeNamesList))
            dispatch(toggleLoader())
          }
        })
        return true
      })
    })
  }
}

export const startUpdatePokeList = (page, sizePerPage) => {
  return (dispatch, getState) => {
    const minNumber = (page * sizePerPage) - sizePerPage
    const maxNumber = page * sizePerPage
    const pokeNamesList = getState().pokeList
    if (page !== getState().currentPage) {
      dispatch(updatePage(page))
    }
    if (sizePerPage !== getState().itemsPerPage) {
      dispatch(updateItemsPerPage(sizePerPage))
    }

    return pokeNamesList.map((pokemon, idx) => {
      if (idx > minNumber - 1 && idx < maxNumber) {
        if (!pokeNamesList[idx].types) {
          pokeApi.request(pokemon.url)
          .then((description) => {
            const reqData = description.data

            pokeNamesList[idx].types = reqData.types.map(
              (type) => {
                return type.type.name
              }).join(', ')

            reqData.stats.map((stat) => {
              pokeNamesList[idx][stat.stat.name] = stat.base_stat
              return true
            })
            pokeNamesList[idx].image = reqData.sprites.front_default

            dispatch(updatePokeList(pokeNamesList))
          })
        }
      }
      return true
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

export const updatePage = (page) => {
  return {
    type: 'UPDATE_PAGE',
    page
  }
}

export const resetPage = () => {
  return {
    type: 'RESET_PAGE'
  }
}

export const updateItemsPerPage = (perPage) => {
  return {
    type: 'UPDATE_ITEMS_PER_PAGE',
    perPage
  }
}

export const startSetSearchText = (searchText) => {
  return (dispatch, getState) => {
    const pokeList = getState().pokeList
    let newPokeList = [...pokeList]

    const page = getState().currentPage
    const sizePerPage = getState().itemsPerPage

    const filteredList = pokeFilter.filter(pokeList, searchText, page, sizePerPage)[0]

    dispatch(setSearchText(searchText))

    if (getState().currentPage !== 1) {
      dispatch(resetPage())
    }

    filteredList.map((pokemon, idx) => {
      if (!newPokeList[pokemon.id - 1].types) {
        pokeApi.request(pokemon.url)
        .then((description) => {
          const reqData = description.data

          newPokeList[pokemon.id - 1].types = reqData.types.map(
            (type) => {
              return type.type.name
            }).join(', ')

          reqData.stats.map((stat) => {
            newPokeList[pokemon.id - 1][stat.stat.name] = stat.base_stat
            return true
          })
          newPokeList[pokemon.id - 1].image = reqData.sprites.front_default
          dispatch(updatePokeList(newPokeList))
        })
      }
      return true
    })
  }
}

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export const listLengthSet = (listLength) => {
  return {
    type: 'SET_LIST_LENGTH',
    listLength
  }
}

export const listLengthUpdate = (listLength) => {
  return {
    type: 'UPDATE_LIST_LENGTH',
    listLength
  }
}

export const toggleLoader = () => {
  return {
    type: 'TOGGLE_LOADER'
  }
}
