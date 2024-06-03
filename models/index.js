const mongoose = require('mongoose')
const Species = require('./species')
const Info = require('./info')
const Tactics = require('./tactics')

//convert schema to model with the same name

// const Species = mongoose.model('species', speciesSchema)
// const Info = mongoose.model('info', infoSchema)
// const Tactics = mongoose.model('gear', tacticsSchema)

module.exports = {
    Species,
    Info,
    Tactics
  }