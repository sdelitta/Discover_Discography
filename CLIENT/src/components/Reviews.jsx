import { React, useState } from 'react'
import axios from 'axios'

function Reviews() {
  const [fName, setName] = useState("")
  const [fEmail, setEmail] = useState("")

  const getDetails = () => {
  return {
        name: fName,
        comments: fEmail,
        rating: 320457

      }
  }

  const sendToAPI = async (e) => {
      const details = getDetails()        
      
      // const something = await axios.post(`http://127.0.0.1:3001/api/coasters/review/623cb3b8d6168b0bed6a5176`,details)  
      const something = await axios.post(`http://127.0.0.1:3001/api/coasters/review/623dfe9457ed3eea786a98a0`, details)  

      e.preventDefault()  
      console.log(something)
 }

  return ( 
    <div className='review'>
        <h2>Hi, I am a review box!</h2>
        <h3>Please write your review here</h3>

        <form id="feedback" action="">
          <div className="pinfo">Your personal info</div>
  
              <div className="form-group">
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user"></i></span>
              <input  name="name" placeholder="John Doe" className="form-control"  type="text" onChange={(e) => setName(e.target.value)}/>
          </div>
             </div>
          </div>
            
          <div className="form-group">
            <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
              <input name="comment" type="text" className="form-control" placeholder="This album rocks!" onChange={(e) => setEmail(e.target.value)} />
              <button onClick={()=> sendToAPI()}>Submit</button>
            </div>
            </div>
          </div>
        </form>
</div>
  )
}

export default Reviews