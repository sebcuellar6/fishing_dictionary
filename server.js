const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3003
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const SpeciesController = require('./controllers/SpeciesController')
const InfoController = require('./controllers/InfoController')
const TacticsController = require('./controllers/TacticsController')
const RecordController = require('./controllers/RecordController')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(logger(`dev`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`)
})

app.get('/', (req,res) => res.send('fishing server'))


app.get('/species', SpeciesController.getAllSpecies)
app.get('/info', InfoController.getAllInfo)
app.get('/tactics', TacticsController.getAllTactics)
app.get('/records', RecordController.getAllRecords)



app.get('/species/:id', SpeciesController.getSpeciesById)
app.get('/info/:id', InfoController.getInfoById)
app.get('/tactics/:id', TacticsController.getTacticsById)
app.get('/records/:id', RecordController.getRecordById)

//get by species ID
app.get('/tactics/species/:id', TacticsController.getTacticsBySpeciesId)
app.get('/info/species/:id', InfoController.getInfoBySpeciesId)

//create
app.post('/species', SpeciesController.createSpecies)
app.post('/info', InfoController.createInfo)
app.post('/Tactics', TacticsController.createTactics)
app.post('/records', RecordController.createRecord)

//update
app.put('/species/:id', SpeciesController.updateSpecies)
app.put('/info/:id', InfoController.updateInfo)
app.put('/tactics/:id', TacticsController.updateTactics)
app.put('/records/:id', RecordController.updateRecord)

//delete
app.delete('/species/:id', SpeciesController.deleteSpecies)
app.delete('/info/:id', InfoController.deleteInfo)
app.delete('/tactics/:id', TacticsController.deleteTactics)
app.delete('/records/:id', RecordController.deleteRecord)

//catch all
app.get('*', (req, res) => res.send('404 page not found'))