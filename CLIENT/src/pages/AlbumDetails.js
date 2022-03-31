import React from 'react'
import Reviews from '../components/Reviews'
import Albums from './Albums'
// import image from './images/'


function AlbumDetails() {
  return (
    <div>
      <div className='AlbumDetails'>
          <img src={Albums.image} alt ='' style={{width: '50vw', marginTop: '50px', textAlign:"center"}}/>
          <h1>Album</h1>
          <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>This will eventually be a review</p>
      </div>
      <Reviews />
    </div>
  )
}

export default AlbumDetails