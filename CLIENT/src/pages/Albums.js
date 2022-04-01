import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Albums() {
  const [ albums, setAlbums ] = useState ([])

  const getAlbums = async () => {
    const res = await axios("http://localhost:3001/api/allAlbums")
    setAlbums(res.data.albums)
    console.log(albums)
  }

  useEffect(()=> {
      getAlbums()
  },[])

  if(!albums){
    return <h1>Loading Please Wait!</h1>
  } else {
    return (
      <div className='albums-page'>
        <div className="artist-title">
          <h1>Albums DB</h1>
        </div>
          {albums.map((album) => {
            return (
              <div style={{display: 'inline-block', textAlign: 'center', width: '85vw'}} key={album._id}>
                <Link to={`/albums/details/${album._id}`}>
                  <img src={album.image} alt={''} style={{width: '85vw'}}/>
                  <h1>{album.albumName}</h1>
                </Link>
                  <p>Year Released:{album.year}</p>
                  <p>Certification: {album.revenue}</p>
                  {/* {album.reviews.map((rev) => {
                    return (
                    <div key={rev._id}></div>
                  )})} */}
              </div>
          )})}
      </div>
  )
}
}

export default Albums