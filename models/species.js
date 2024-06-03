const mongoose = require('mongoose');
const { Schema } = mongoose;

const speciesSchema = new Schema(
    {
        name: { type: String, required: true },
        saltFreshOrBoth: { type: String, required: true },
        prevelance: { type: String, required: true },
        pic: { type: String, required: false },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Species', speciesSchema);
