const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const recordSchema = new Schema(
    {
        species_name: {type: String, required: true},
        length_inches: {type: Number, required: true},
        weight_lboz: {type: Number, required: true},
        state: {type: String, required: true},
        bodyWater: {type: String, required: false},
        anglers_name: {type: String, required: true},
        fish_img: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('record', recordSchema);