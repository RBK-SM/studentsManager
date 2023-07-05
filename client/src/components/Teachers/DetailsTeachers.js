import axios from "axios";
import React, { useState } from "react";

const DetailsTeachers = (Name) => {
  const [newTeachersName, setNewTeachersName] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [view, setView] = useState(false);

  const changeView = () => {
    setView(!view);
  };

  const deleteTeacher = (name) => {
    axios
      .delete(`URL${name}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const updateTeacher = (name) => {
    axios
      .put(`URL${name}`, {
        teacherName: teacherName,
        email: email,
        password: password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="teacher-detail">
      <div>
        <ul>
          <li className="detail-name">{Name.teacherName}</li>
          <li>
            {view ? (
              <input
                type="text"
                value={Name.teacherName}
                onChange={(e) => setNewTeachersName(e.target.value)}
              />
            ) : (
              Name.teacherName
            )}
          </li>
          <li>
            {view ? (
              <input
                type="text"
                value={Name.email}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            ) : (
              Name.email
            )}
          </li>
          <li>
            {view ? (
              <input
                type="text"
                value={Name.password}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            ) : (
              Name.password
            )}
          </li>
        </ul>
      </div>
      {view ? (
        <button
          onClick={() => {
            updateTeacher(Name.teacherName.email.password);
          }}
        >
          Update Teacher
        </button>
      ) : (
        <button onClick={changeView}>Edit Teacher</button>
      )}

      <button onClick={() => deleteTeacher(Name.teacherName)}>
        Delete Teacher
      </button>
    </div>
  );
};
export default DetailsTeachers;
