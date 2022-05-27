import React from 'react'


function ArtistCards(props) {
  return (
    <div className="artist-card" >
      <li className="artist-item" id={props.artistName}>
        <h3>Name: {props.artistName}</h3>
        <h5>Members: {props.members}</h5>
        <h5>Albums: {props.albums}</h5>
      </li>
      <div className="img-wrapper">
        <img src={props.picture} alt={props.artistName}></img>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.artistName}</h3>
      </div>
    </div>
    
  )
}

export default ArtistCards