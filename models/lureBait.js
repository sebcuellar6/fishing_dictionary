const mongoose = require('mongoose')
const Schema = require('mongoose')

const lureBaitSchema = new Schema(
    {
        species_id: { type: Schema.Types.ObjectId, ref: 'species', required: true },
        temperment: { type: String, required: true },
        locations: { type: String, required: true },
        favouriteFoods: { type: String, required: true },
        description: { type: String, required: true },
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('info', infoSchema);