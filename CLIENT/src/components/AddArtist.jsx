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
        Members: fMembers,
        Albums: fAlbums,
        Picture: fPicture
      }
  }

  const sendToAPI = async (e) => {
      const details = getDetails()        
      
      // const something = await axios.post(`http://127.0.0.1:3001/api/coasters/review/623cb3b8d6168b0bed6a5176`,details)  
      const something = await axios.put(`http://127.0.0.1:3001/api/`, details)  

      e.preventDefault()  
      console.log(something)
 }

  return ( 
    <div className='add-artist'>
        <h2>Add Artists Here!</h2>
        

        <form id="artist-form" action="put">
          <div className="pinfo">Custom Artist Form</div>
  
              <div className="form-group">
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="artist-name"></i></span>
              <input  name="name" placeholder="John Doe" className="form-control"  type="text" onChange={(e) => setName(e.target.value)}/>
          </div>
             </div>
          </div>
            
          <div className="form-group">
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
              <input name="comment" type="text" className="form-control" placeholder="This album rocks!" onChange={(e) => setName(e.target.value)} />
              <button onClick={()=> sendToAPI()}>Submit</button>
            </div>
            </div>
          </div>
        </form>
</div>
  )
}

export default AddArtist