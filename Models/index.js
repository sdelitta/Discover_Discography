const { model } =  require('mongoose')
const AlbumSchema = require('./coaster')
const Artist = require('./park')
const ReviewSchema = require('./review')

const Album = model('coaster',CoasterSchema)
const Artist = model('park',ParkSchema)
const Review = model('review',ReviewSchema)

module.exports = {
    Album,
    Artist,
    Review,
}