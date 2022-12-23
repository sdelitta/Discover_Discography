const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema(
    {
        artistName:{ type: String, required: true},
        members:{ type: String, required: false},
        albums:{ type: Array, required: true},
        picture:{type: String, required: false},
    },
    { timestamps: true }
)

module.exports = Artist