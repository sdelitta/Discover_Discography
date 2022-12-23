const { Schema } = require('mongoose')

const Album = new Schema(
    {
        artistName: {type: String, required: true},
        albumName:{ type: String, required: true},
        year:{ type: String, required: true},
        revenue:{ type: String, required: false},
        image:{type: String, required: false},
    },
    { timestamps: true }
)

module.exports = Album