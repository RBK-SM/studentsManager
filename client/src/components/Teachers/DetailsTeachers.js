import axios from "axios";
import React, { useState } from "react";

const DetailsTeachers = () => {
  const [newTeachersName, setNewTeachersName] = useState(teachersName);
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
          <li className="detail-name">
            {newTeachersName}
            {view ? (
              <input
                type="text"
                value={newTeachersName}
                onChange={(e) => setNewTeachersName(e.target.value)}
              />
            ) : (
              teacherName
            )}
          </li>
          <li>
            {view ? (
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            ) : (
              email
            )}
          </li>
          <li>
            {view ? (
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            ) : (
              password
            )}
          </li>
        </ul>
      </div>
      {editMode ? (
        <button onClick={updateTeacher}>Update Teacher</button>
      ) : (
        <button onClick={changeView}>Edit Teacher</button>
      )}

      <button onClick={() => deleteTeacher(teacherName)}>Delete Teacher</button>
    </div>
  );
};
export default DetailsTeachers;
