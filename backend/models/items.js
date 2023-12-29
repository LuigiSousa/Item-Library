const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    Id: Number,
    name: String,
    rarity: String,
    usable: Boolean,
    description: String,
    image: String,
})

module.exports = mongoose.model('Item', itemSchema)