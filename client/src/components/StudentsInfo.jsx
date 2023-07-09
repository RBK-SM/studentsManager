import React, { useState } from 'react';
import axios from 'axios';

function StudentsInfo(props) {
  const [update, setUpdate] = useState(false)
  const [name, setName] = useState(props.data1.name)
  const [gender, setGender] = useState(props.data1.gender)
  const [phone, setPhone] = useState(props.data1.phone)
  const [email, setEmail] = useState(props.data1.email)
  const [attendance, setAttendance] = useState(props.data1.attendance)
  const [image, setImage] = useState(props.data1.image)
  const [teachersId, setTeachersId] = useState(props.data1.teachers_idteacher)

  const handleUpdate = () => {
    const updated = {
      idstudents: props.data1.idstudents,
      name:props.data1.name,
      gender:props.data1.gender,
      phone:props.data1.phone,
      email:props.data1.email,
      attendance:props.data1.attendance,
      image:props.data1.image,
      // teachers_idteacher: teachersId
    };

    axios.put(`http://localhost:5000/api/SM/students/${props.data1.id}/${props.data1.teachers_idteacher}`, updated)
      .then((res) => {
        console.log(res)
        setUpdate(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDelete = () => {

    axios.delete(`http://localhost:5000/api/SM/students/${props.data1.idstudents}`)
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
            <input type="text" value={props.data1.name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={props.data1.gender} onChange={(e)=>setGender(e.target.value)} />
            <input type="text" value={props.data1.phone} onChange={(e)=>setPhone(e.target.value)} />
            <input type="text" value={props.data1.email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={props.data1.attendance} onChange={(e)=>setAttendance(e.target.value)} />
            <input type="text" value={props.data1.image} onChange={(e)=>setImage(e.target.value)} />
            {/* <input type="text" value={props.data1.teachersId} onChange={(e)=>setTeachersId(e.target.value)} /> */}
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div>
            <p>Gender: {props.data1.gender}</p>
            <p>Phone: {props.data1.phone}</p>
            <p>Email: <br />{props.data1.email}</p>
            <p>Attendance: {props.data1.attendance}</p>
            <div>
              <button className="btn2" onClick={handleUp}>Update info</button>
              <button className="btn2" onClick={handleDelete}>Delete Info</button>
            </div>
          </div>
        )}
      </center>
    </div>
  );
}

export default StudentsInfo;
