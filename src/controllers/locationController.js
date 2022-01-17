const axios = require('axios')
require('dotenv').config()


const options = {
    method: 'GET',
    url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
    params: {latlng: null, result_type: 'country', language: 'en'},
    headers: {
      'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_GEOCODING_API_KEY
    }
  };

const getCountryFromCoordinates = async (lat, lon) => {
    options.params.latlng = `${lat},${lon}`
    try {
      const data = await axios.request(options)
      const country = {country: data.data.results[0].formatted_address}
      return country
    } catch(err) {
      console.error(err)
    };
}

const getCountryFromProxy = async (lat, lon) => {
  try {
    const data = await axios.get(`http://localhost:4000/coordinates?lat=${lat}&lon=${lon}`)
    console.log(data.data.country)
    return data.data.country
  } catch(err) {
    console.error(err)
  };
}

module.exports = {
  getCountryFromCoordinates,
  getCountryFromProxy
}