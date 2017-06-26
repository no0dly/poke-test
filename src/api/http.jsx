import axios from 'axios'

const URL = 'http://pokeapi.co/'

export default {
  fetchData() {
    return axios.get(`${URL}api/v2/pokemon/?limit=811`)
  },
  request(reqUrl) {
    return axios.get(reqUrl)
  }
}
