const { model } =  require('mongoose')
const AlbumSchema = require('./album')
const ArtistSchema = require('./artist')
const ReviewSchema = require('./review')

const Album = model('album', AlbumSchema)
const Artist = model('artist', ArtistSchema)
const Review = model('review', ReviewSchema)

module.exports = {
    Album,
    Artist,
    Review,
}