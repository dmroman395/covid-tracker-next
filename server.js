const express = require('express')
const cors = require('cors')
const locationController = require('./src/controllers/locationController')

const { getCountryFromCoordinates } = locationController

const app = express()

app.use(cors())

app.get('/', (req,res) => res.send('HELLLOOOOOOOOO'))

app.get('/coordinates', getCountryFromCoordinates)

const port = process.env.port || 4000;

app.listen(port, () => {console.log(`App listening on port ${port}...`)})
