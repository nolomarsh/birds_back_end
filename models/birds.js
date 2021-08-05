const mongoose = require('mongoose')

const birdSchema = mongoose.Schema({
    time: String,
    place: String,
    species: String,
    image: String,
})

const Bird = mongoose.model("Bird", birdSchema)

module.exports = Bird
