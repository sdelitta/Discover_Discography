import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
// import AlbumDetails from './AlbumDetails'
// import ArtistDetails from '../components/ArtistDetails'
// import ArtistCards from '../components/ArtistCards'

function ArtistAlbums(props) {
  const [ albums, setAlbums ] = useState([])
//   const [selectedArtist, setArtist] = useState([])


  const getAlbums = async () => {
    const res = await axios("http://127.0.0.1:3001/api/allAlbums")
    setAlbums(res.data.albums)
}


useEffect(() => {
    getAlbums()
},[])
  return (
    <div className='artist-albums-page'>
      <div className='artists'>
      {albums.map((album) => {
          return (
              <div className='album-card' key={album._id}>
                  <h1>{album.artistName}</h1>
                <Link to={`artist/albums/${album._id}`}>
                  <img src={album.image} alt={''}/>
                  <h1>{album.albumName}</h1>
                </Link>
                  <h5>Artist: {album.artistName}</h5>
                  <h5>Year Released: {album.year}</h5>
                  <h5>Certification: {album.revenue}</h5>
                  <span></span>
              </div>
        )})}
      </div>  
      <div className="footer">
        <span></span>
        <h6>copyright 2022</h6>
      </div>
    </div>
  )
}

export default ArtistAlbums