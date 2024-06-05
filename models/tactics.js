const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const tacticsSchema = new Schema(
    {
        species_id: { type: Schema.Types.ObjectId, ref: 'species', required: true },
        difficulty: { type: String, required: true },
        baitsLures: { type: String, required: true },
        fishingRundown: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tactics', tacticsSchema);