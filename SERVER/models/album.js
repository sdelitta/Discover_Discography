const { Schema } = require('mongoose')

const Album = new Schema(
    {
        albumName:{ type: String, required: true},
        year:{ type: String, required: true},
        revenue:{ type: String, required: false},
        image:{type: String, required: false},

        artist:{type: String, ref: 'artist'},
        reviews:{type: Array, ref: 'review'}
    },
    { timestamps: true }
)

module.exports = Album