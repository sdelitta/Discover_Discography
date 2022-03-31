import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Albums() {
  const [ albums, setAlbums ] = useState ([])
  const [ reviews, setReviews ] = useState ([])

const getAlbums = async () => {
  const res = await axios("http://127.0.0.1:3001/api/allAlbums")
    // const data = res.json()
  setAlbums(res.data.albums)
  console.log(albums)
}
const getReviews = async () => {
  const res = await axios("http://127.0.0.1:3001/api/allReviews")
  // const data = res.json()
  setReviews(res.data)
  console.log(reviews)
  console.log(res)
  console.log(res.data.reviews)
}

useEffect(()=> {
    getAlbums()
    getReviews()
})
  return (
    <div style={{textAlign: 'center'}} className='home'>
      <h1>Albums DB</h1>
        {albums.map((album) => {
          return (
            
              <div style={{display: 'inline-block', textAlign: 'center', width: '85vw'}} key={album._id}>
                <Link to={`/albums/details/${album._id}`}>
                  <img src={album.image} alt={''} style={{width: '85vw'}}/>
                  <h1>{album.albumName}</h1>
                </Link>
                  <p>Year Released:{album.year}</p>
                  <p>Certification: {album.revenue}</p>
                  {/* {console.log(reviews)} */}
                  {album.reviews.map((rev) => {
                    return (
                    <div key={rev._id}></div>
                  )})}
              </div>
        )})}
    </div>
  )
}

export default Albums