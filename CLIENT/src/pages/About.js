import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'


function About(props) {
    const [ artists, setArtists ] = useState ([])
  
    const getArtists = async () => {
      const res = await axios("http://127.0.0.1:3001/api/allArtists")
      // const data = res.json()
      setArtists(res.data.artists)
      
  }
  
  useEffect(()=> {
      getArtists()
  }, [])
    return (
      <div className='artists'>
        <h1>Top 5 Bestselling Artists Of All-time!</h1>
          {artists.map((artist) => {
            return (
              <Link to={`/artists/details/${artist._id}`}> 
                {/* <div style={{display: 'inline-block', textAlign: 'center', width: '85vw'}} key={artist._id}>
                    <img src={artist.picture} alt={''}/>
                    <h1>{artist.artistName}</h1>
                    <h5>Members:{artist.members}</h5>
                    <h5>Albums:{artist.albums}</h5>
                </div> */}
              </Link>
          )})}
      </div>
    )
  }
  
  export default About