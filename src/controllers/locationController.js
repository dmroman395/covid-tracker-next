const axios = require('axios')
require('dotenv').config()

const getCountryFromProxy = async (lat, lon) => {
  try {
    const data = await axios.get(`https://covid-tracker-express-server.herokuapp.com/coordinates?lat=${lat}&lon=${lon}`)
    return data.data
  } catch(err) {
    console.error(err)
  };
}

module.exports = {
  getCountryFromProxy
}