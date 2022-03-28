const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
    {

        albumName:{ type: String, required: true},
        year:{ type: String, required: true},
        cert:{ type: String, required: false},

        artist:{type: Schema.Types.ObjectId, ref: 'artist'},
        reviews:[{type: Schema.Types.ObjectId, ref: 'review'}]
    },
    { timestamps: true }

)

module.exports = Album