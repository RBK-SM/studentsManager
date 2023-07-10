import React, { useState } from 'react';
import StudentsInfo from './StudentsInfo.jsx';

function Students(props) {
  const [details, setDetails] = useState(false);

const handleDetails = () =>{
     setDetails(true)
}

const handleLess =() =>{
  setDetails(false)
}
 
if (details) {
return (
      <div>
        <StudentsInfo data1={props.data} />
        <button className="btn1" onClick={handleLess}>Less Info</button>
      </div>
    )
}
return (
      <div className="card">
        <div className="card-item">
          <div className="img">
            <img src={props.data.image} alt="Student" />
          </div>
          <center>
            <span>{props.data.name}</span>
          </center>
          <p className="job">student</p>
          <button  onClick={handleDetails}>More Info</button>
        </div>
      </div>
)
    }
      export default Students;