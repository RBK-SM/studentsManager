import axios from "axios";
import React, { useState } from "react";

const DetailsGrade = (data, setRefrech, dataGrade, setDataGrade) => {
  const [view, setView] = useState(false);
  const [grade, setGrade] = useState(data);
  //const [score, setScore] = useState(0);

  const changeView = () => {
    setView(!view);
  };

  const deleteGrade = (idgrades) => {
    axios
      .delete(`http://localhost:5000/api/SM/grades/${idgrades}`)
      .then((res) => {
        setDataGrade(dataGrade.filter((grade) => grade.idgrades != idgrades));
        setRefrech(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateGrade = () => {
    axios
      .put(`http://localhost:5000/api/SM/grades/${grade.idgrades}`)
      .then((response) => {
        setRefrech(true);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="grade-detail">
      <div>
        <ul>
          <li className="grade-name">{grade.subject}</li>
          <li>
            {view ? (
              <input
                type="text"
                Value={grade.subject}
                onChange={(e) => {
                  console.log(subject);
                  setGrade({ ...data, subject: e.target.value });
                }}
              />
            ) : (
              grade.subject
            )}
          </li>
        </ul>
      </div>
      {view ? (
        <button
          onClick={() => {
            updateGrade();
          }}
        >
          Update Grade
        </button>
      ) : (
        <button onClick={changeView}>Edit Grade</button>
      )}

      <button onClick={() => deleteGrade(grade.idgrades)}>Delete Grade</button>
    </div>
  );
};

export default DetailsGrade;
