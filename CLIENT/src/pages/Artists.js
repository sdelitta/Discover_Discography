import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import {getArtists, deleteArtist} from "./utilities"
import CustomizeArtist from "../components/CustomizeArtist"

function Artists(props) {
  const [ artists, setArtists ] = useState([])

  useEffect(() => { 
    getArtists().then((artists)=> {
      setArtists(artists)
    })
  },[])
  return (
    <div className='artists-page'>
      <div className='artist-title'>
        <h1>Artist Database</h1>
      </div>
      <div className='artists'>
        {artists.map((artist) => {
          return (
              <div className='artist-card' style={{display: 'inline-block', textAlign: 'center', width: '85vw'}} key={artist._id}>
                <Link to={`/artists/${artist._id}/albums`}> 
                  <img src={artist.picture} alt={''}/>
                  <h1>{artist.artistName}</h1>
                </Link>
                <button onClick= {()=> {deleteArtist (artist._id)}}  >Delete</button>
                  <h5>Members: {artist.members}</h5>
                  <h5>Albums: {artist.albums.join(", ")}</h5>
                  <span></span>
              </div>
        )})}
      </div>
      <CustomizeArtist artists={artists} />
      <div className="footer">
        <span></span>
        <h6>copyright 2022</h6>
      </div>
    </div>
  )
}

export default Artists