import axios from 'axios'

let API_KEY = 'AIzaSyBnKLeofem87rPuTLSPEAAykqbNb-u5_-Q'
let url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + API_KEY

export default function (url) {
  return axios.get(url)
}
