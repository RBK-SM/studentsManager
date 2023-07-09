import axios from "axios";
import React, { useState } from "react";

const DetailsTeachers = ({ data, setRefrech, dataTeacher, setDataTeacher }) => {
  const [teacher, setTeacher] = useState(data);
  const [view, setView] = useState(false);

  const changeView = () => {
    setView(!view);
  };
  React.useEffect(() => {
    console.log({ data });
  }, []);
  const deleteTeacher = (idteacher) => {
    axios

      .delete(`http://localhost:5000/api/SM/teachers/${idteacher}`)
      .then((res) => {
        setDataTeacher(
          dataTeacher.filter((teacher) => teacher.idteacher != idteacher)
        );
        setRefrech(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const updateTeacher = () => {
    axios
      .put(
        `http://localhost:5000/api/SM/teachers/${teacher.idteacher}`,
        teacher
      )
      .then((response) => {
        setRefrech(true);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="teacher-detail">
      <div>
        <ul>
          <li className="detail-name">{data.name}</li>
          <li>
            {view ? (
              <input
                type="text"
                value={teacher.name}
                onChange={(e) => {
                  setTeacher({ ...data, name: e.target.value });
                }}
              />
            ) : (
              teacher.name
            )}
          </li>
          <li>
            {view ? (
              <input
                type="text"
                value={teacher.email}
                onChange={(e) => {
                  setTeacher({ ...data, email: e.target.value });
                }}
              />
            ) : (
              teacher.email
            )}
          </li>
          <li>
            {view ? (
              <input
                type="text"
                value={teacher.password}
                onChange={(e) => {
                  setTeacher({ ...data, password: e.target.value });
                }}
              />
            ) : (
              teacher.password
            )}
          </li>
        </ul>
      </div>
      {view ? (
        <button
          onClick={() => {
            updateTeacher();
          }}
        >
          Update Teacher
        </button>
      ) : (
        <button onClick={changeView}>Edit Teacher</button>
      )}

      <button onClick={() => deleteTeacher(teacher.idteacher)}>
        Delete Teacher
      </button>
    </div>
  );
};
export default DetailsTeachers;
