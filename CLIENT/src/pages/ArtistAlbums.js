import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
import {getArtist} from "./utilities"

function ArtistAlbums(props) {
  const [ albums, setAlbums ] = useState([])
  const [artist, setArtist] = useState()
    const {id} = useParams()
  const getAlbums = async () => {
    const res = await axios(`http://127.0.0.1:3001/api/artists/${id}/albums`)
    setAlbums(res.data.albums)
}

useEffect(() => {
    getAlbums()
    getArtist(id).then((a) => {
        setArtist(a)
    })
},[])


if(!artist){
    return <div>Loading... (cue cool spinner)</div>
}
  return (
    <div className='artist-albums-page'>
      <div className='artists'>
      <h1>{artist.artistName}</h1>
      {albums.map((album) => {
          return (
              <div className='album-card' key={album._id}>
                <Link to={`artists/albums/${album._id}`}>
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