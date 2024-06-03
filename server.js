const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3002
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const SpeciesController = require('./controllers/SpeciesController')
const InfoController = require('./controllers/InfoController')
const TacticsController = require('./controllers/TacticsController')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger(`dev`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => {
    console.log('listening')
})

app.get('/', (req,res) => res.send('fishing server'))


app.get('/species', SpeciesController.getAllSpecies)
app.get('/info', InfoController.getAllInfo)
app.get('/tactics', TacticsController.getAllTactics)