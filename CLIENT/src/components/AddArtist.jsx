import { React, useState } from 'react'
import axios from 'axios'

function AddArtist() {
  const [fName, setName] = useState("")
  const [fMembers, setMembers] = useState("")
  const [fAlbums, setAlbums] = useState("")
  const [fPicture, setPicture] = useState("")

  const getDetails = () => {
  return {
        artistName: fName,
        members: fMembers,
        albums: fAlbums,
        picture: fPicture
      }
  }

    const sendToAPI = async (e) => {
        e.preventDefault()  
        const details = getDetails()        
        const something = await axios.post(`http://127.0.0.1:3001/api/artists/create`, details)
        console.log(something)
        window.location.reload()
    }

    return ( 
        <div className='customize-db'>
            <h2>Add Artists Here!</h2>
            <form id="add-form" onSubmit= {sendToAPI}>
                <div className="pinfo">Custom Artist Form</div>
                <div className="form-group">
                    <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="artist-name"></i></span>
                            <input name="name" placeholder="Artist Name" className="form-control"  type="text" value={fName} onChange={(e) => setName(e.target.value)}/>
                            <input name="members" type="text" className="form-control" placeholder="Band Members" value={fMembers} onChange={(e) => setMembers(e.target.value)} />
                            <input name="albums" type="text" className="form-control" placeholder="Albums" value={fAlbums} onChange={(e) => setAlbums(e.target.value)} />
                            <input name="picture" type="text" className="form-control" placeholder="Photo URL" value={fPicture} onChange={(e) => setPicture(e.target.value)} />
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddArtist