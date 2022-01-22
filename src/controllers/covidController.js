const axios = require('axios')

const getNewsFromProxy = async (location) => {
  try {
    const data = await axios.get(`https://covid-tracker-express-server.herokuapp.com/news?location=${location}`)
    return data.data
  } catch(err) {
    console.error(err)
  };
}

const getStatsFromProxy = async (location) => {
  try {
    const data = await axios.get(`https://covid-tracker-express-server.herokuapp.com/stats?location=${location}`)
    return data.data
  } catch(err) {
    console.error(err)
  };
}

module.exports = {
  getNewsFromProxy,
  getStatsFromProxy
}