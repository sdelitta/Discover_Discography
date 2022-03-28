const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema(
    {
        artistName:{ type: String, required: true},
        members:{ type: String, required: false},
        albums:[{ type: String, required: true}],
        
        reviews:[{type: Schema.Types.ObjectId, ref: 'review'}],
        album:[{type: Schema.Types.ObjectId, ref: 'album'}]
    },
    { timestamps: true }
)

module.exports = Artist