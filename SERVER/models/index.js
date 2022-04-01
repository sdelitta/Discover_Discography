const { model } =  require('mongoose')
const AlbumSchema = require('./album')
const ArtistSchema = require('./artist')

const Album = model('album', AlbumSchema)
const Artist = model('artist', ArtistSchema)

module.exports = {
    Album,
    Artist
}