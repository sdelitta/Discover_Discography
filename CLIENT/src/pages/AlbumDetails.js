import React from 'react'
import Albums from './Albums'

function AlbumDetails() {
  return (
    <div>
      <div className='AlbumDetails'>
          <img src={Albums.image} alt ='' style={{width: '50vw', marginTop: '50px', textAlign:"center"}}/>
          <h1>Album</h1>
      </div>
    </div>
  )
}

export default AlbumDetails