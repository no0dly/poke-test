import pokeApi from '../api/http'

export const fetchPokeNamesList = (initialItemsPerPage) => {
  return (dispatch, getState) => {
    pokeApi.fetchData().then((response) => {
      let pokeNamesList = response.data.objects[0].pokemon
      pokeNamesList.map((pokemon, idx) => {
        if (idx > initialItemsPerPage - 1) { return false }
        pokeApi.request(pokemon.resource_uri)
        .then((description) => {
          const reqData = description.data
          pokeNamesList[idx].type = reqData.types[0].name
          pokeNamesList[idx].atk = reqData.sp_atk
          pokeNamesList[idx].def = reqData.sp_def
          pokeNamesList[idx].speed = reqData.speed
          pokeNamesList[idx].pkdx_id = reqData.pkdx_id
          dispatch(setPokeList(pokeNamesList))
        })
      })
    })
  }
}

// export const fetchPokeDescription = () => {
//   return (dispatch, getState) => {
//     pokeApi.fetchData().then((response) => {
//       const pokeList = response.data.objects[0].pokemon
//       dispatch(setPokemonList(pokeList))
//       pokeList.map((pokemon, idx) => {
//         if (idx >= 20) { return false }
//         let pokeDescr = {
//           name: pokemon.name
//         }
//         pokeApi.request(pokemon.resource_uri)
//         .then((description) => {
//           const reqData = description.data
//
//           pokeDescr.type = reqData.types[0].name
//           pokeDescr.atk = reqData.sp_atk
//           pokeDescr.def = reqData.sp_def
//           pokeDescr.speed = reqData.speed
//
//           return reqData.sprites[0].resource_uri
//         })
//         .then((spriteUrl) => {
//           pokeApi.request(spriteUrl).then((sprite) => {
//             pokeDescr.img = sprite.data.image
//             pokeData.push(pokeDescr)
//             console.log(pokeData)
//           })
//         })
//       })
//     })
//   }
// }

export const setPokeList = (list) => {
  return {
    type: 'SET_INITIAL_POKE_LIST',
    list
  }
}
