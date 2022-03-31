import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'
// import AlbumDetails from './AlbumDetails'
// import ArtistDetails from '../components/ArtistDetails'
// import ArtistCards from '../components/ArtistCards'

function Artists(props) {
  const [ artists, setArtists ] = useState([])

  const getArtists = async () => {
    const res = await axios("http://127.0.0.1:3001/api/allArtists")
    setArtists(res.data.artists)   
}

useEffect(()=> {
    getArtists()
},[])
  return (
    <div className='artists-page'>
      <div className='artist-title'>
        <h1>Top 5 Bestselling Artists Of All-time</h1>
      </div>
      <div className='artists'>
      {artists.map((artist) => {
          return (
              <div className='artist-card' style={{display: 'inline-block', textAlign: 'center', width: '85vw'}} key={artist._id}>
                <Link to={`api/artists/${artist._id}/albums`}> 
                  <img src={artist.picture} alt={''}/>
                  <h1>{artist.artistName}</h1>
                </Link>
                  <h5>Members: {artist.members}</h5>
                  <h5>Albums: {artist.albums.join(", ")}</h5>
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

export default Artists