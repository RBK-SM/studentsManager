import React, { useState } from 'react';
import axios from 'axios';

function StudentsInfo(props) {
  console.log(props.data1,"props");
  const [update, setUpdate] = useState(false)
  const [name,setName]=useState('')
  const [gender,setGender]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [attendance,setAttendance]=useState('')
  const [image,setImage]=useState('')

  const handleUpdate = (idstudents,name,gender,phone,email,attendance,image) => {
    axios.put(`http://localhost:5000/api/SM/students/${idstudents}`,{name,gender,phone,email,attendance,image})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDelete = (idstudents) => {
    axios.delete(`http://localhost:5000/api/SM/students/${idstudents}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUp = () => {
    setUpdate(!update)
  }

  return (
    <div className="card1">
      <center>
        {update ? (
          <div>
            <input  value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input  value={gender} onChange={(e)=>{setGender(e.target.value)}} />
            <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input  value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            <input  value={attendance} onChange={(e)=>{setAttendance(e.target.value)}} />
            <input  value={image} onChange={(e)=>{setImage(e.target.value)}} />
            <button onClick={()=>{handleUpdate(props.data1.idstudents,name,gender,phone,email,attendance,image),console.log(props.data1.idstudents,name,gender,phone,email,attendance,image);}} type="submit">Update</button>
          </div>
        ) : (
          <div>
            <p>Gender: {props.data1.gender}</p>
            <p>Phone: {props.data1.phone}</p>
            <p>Email: <br />{props.data1.email}</p>
            <p>Attendance: {props.data1.attendance}</p>
            <div>
              <button className="btn2" onClick={()=>{handleUp()}}>Update info</button>
              <button className="btn2" onClick={()=>handleDelete(props.data1.idstudents)}>Delete Info</button>
            </div>
          </div>
        )}
      </center>
    </div>
  );
}

export default StudentsInfo;