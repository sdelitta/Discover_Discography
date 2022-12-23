import { React, useState } from 'react'
import axios from 'axios'

function CustomizeArtist(props) {
    const {artists} = props
    const [fName, setName] = useState("")
    const [fMembers, setMembers] = useState("")
    const [fAlbums, setAlbums] = useState("")
    const [fPicture, setPicture] = useState("")
    const [fId, setId] = useState("")
    const [isAdd, setAdd] = useState(true)

    const getDetails = () => {
    return {
            artistName: fName,
            members: fMembers,
            albums: fAlbums,
            picture: fPicture
        }
    }
    const loadArtist = (e) => {
        const value = e.target.value
        const artist = artists.find((artist)=> { return artist.artistName === value })
        setName(artist.artistName)
        setMembers(artist.members)
        setAlbums(artist.albums.join(", "))
        setPicture(artist.picture)
        setId(artist._id)
        console.log("this is a test", artist)
    }

    const sendToAPI = async (e) => {
        e.preventDefault()  
        const details = getDetails()        
        if (isAdd) {
            await axios.post(`http://127.0.0.1:3001/api/artists/create`, details)
        } else {
            await axios.put(`http://127.0.0.1:3001/api/artists/${fId}`, details)
        }
        window.location.reload()
    }

    return ( 
        <div className='customize-db'>
            <h2>
                {isAdd ? "Add" : <button onClick={() => {setAdd(true)}}>Add</button>}
                {" "}
                or
                {" "} 
                {!isAdd ? "Customize" : <button onClick={() => {setAdd(false)}}>Customize</button>} 
                {" "}
                Artists Here!
            </h2>
            <form id="add-form" onSubmit= {sendToAPI}>
                <div className="custom-title"></div>
                <div className="form-group">
                    <span></span>
                    {isAdd 
                        ? <input name="name" placeholder="Artist Name" className="form-control"  type="text" value={fName} onChange={(e) => setName(e.target.value)}/>
                        : <select onChange={(e)=> {loadArtist(e)}}>
                            <option value="">--Select Artist--</option>
                            {artists.map((artist) => (
                                <option value={artist.artistName} key={artist.artistName}>{artist.artistName}</option>
                            ))} 
                        </select>}
                    <input name="artistName" type="text" className="form-control" placeholder="Add Artist Name" value={fName} onChange={(e) => setName(e.target.value)} />
                    <input name="members" type="text" className="form-control" placeholder="Band Members" value={fMembers} onChange={(e) => setMembers(e.target.value)} />
                    <input name="albums" type="text" className="form-control" placeholder="Albums" value={fAlbums} onChange={(e) => setAlbums(e.target.value)} />
                    <input name="picture" type="text" className="form-control" placeholder="Photo URL" value={fPicture} onChange={(e) => setPicture(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CustomizeArtist