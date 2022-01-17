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

const getCountryFromCoordinates = (lat, lon) => {
    options.params.latlng = `${lat},${lon}`
    axios.request(options).then(response =>  {
        return ({country: response.data.results[0].formatted_address})
    }).catch(error => {
        console.error(error);
    });
}

const getCountryFromProxy = async (lat, lon) => {
  try {
    const data = await axios.get(`http://localhost:4000/coordinates?lat=${lat}&lon=${lon}`)
    console.log(data)
    return data
  } catch(err) {
    console.error(err)
  };
}

module.exports = {
  getCountryFromCoordinates,
  getCountryFromProxy
}