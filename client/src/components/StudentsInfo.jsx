import React, { useState } from 'react';
import axios from 'axios';

function StudentsInfo(props) {
  const [update, setUpdate] = useState(false)
  const [name,setName]=useState('')
  const [gender,setGender]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [attendance,setAttendance]=useState('')
  const [image,setImage]=useState('')

  const handleUpdate = (idstudents,teachers_idteacher,name,gender,phone,email,attendance,image) => {
    axios.put(`http://localhost:3000/api/SM/students/${idstudents}/${teachers_idteacher}`,{name,gender,phone,email,attendance,image})
      .then((res) => {
        console.log(res)
        setUpdate(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/SM/students/${props.data1.idstudents}`)
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
        {isEditing ? (
          <div>
            <input type="text" value={name} onChange={(e)=>setInput(e.target.value)} />
            <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} />
            <input type="text" value={email} onChange={(e)=>setPhone(e.target.value)} />
            <input type="text" value={phone} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={attendance} onChange={(e)=>setAttendance(e.target.value)} />
            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
            <button onClick={handleUpdate(props.data1.idstudents,props.data1.teachers_idteacher,name,gender,phone,email,attendance,image)} type="submit">Update</button>
          </div>
        ) : (
          <div>
            <p>Gender: {props.data1.gender}</p>
            <p>Phone: {props.data1.phone}</p>
            <p>Email: <br />{props.data1.email}</p>
            <p>Attendance: {props.data1.attendance}</p>
            <div>
              <button className="btn2" onClick={handleUp()}>Update info</button>
              <button className="btn2" onClick={handleDelete}>Delete Info</button>
            </div>
          </div>
        )}
      </center>
    </div>
  );
}

export default StudentsInfo;
