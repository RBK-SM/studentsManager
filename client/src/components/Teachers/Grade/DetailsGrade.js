import axios from "axios";
import React, { useState } from "react";

const DetailsGrade = (grade) => {
    const [view, setView] = useState(false);
    const [subject, setSubject] = useState("");
    const [score, setScore] = useState(0);
  const changeView = () => {
    setView(!view);
  };
  const deleteGrade = (name) => {
    axios
      .delete(`URL${name}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const updateGrade = (name) => {
    axios
      .put(`URL${name}`, {
        subject: subject,
        score: score,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return(
    <div className="grade-detail">
      <div>
        <ul>
          <li className="grade-name">{grade.score}</li>
          <li>
            {view ? (
              <input
                defaultValue={grade.subject}
                onChange={(e) => {
                  console.log(subject);
                  setSubject(e.target.value);
                }}
              />
            ) : (
              grade.subject
            )}
          </li>
        </ul>
      </div>
      <button onClick={changeView}>Edit Grade subject</button>
      <button
        onClick={() => {
          updateGrade(grade.score);
        }}
      >
        Update grade
      </button>
      <button onClick={() => deleteGrade(grade.score)}>
        Delete Grade
      </button>
    </div>
  )
};

export default DetailsGrade;
