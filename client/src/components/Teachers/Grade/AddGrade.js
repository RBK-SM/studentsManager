import axios from "axios";
import React, { useState } from "react";

const AddGrade = () => {
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState(0);

  const addGrade = () => {
    const grades = {
      subject: subject,
      score: score,
    };
    axios
      .post("URL", grades)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="create-grade">
      <div>
        <h2 className="head"> </h2>
      </div>
      <div>
        <input
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
      </div>
      <div>
        <input onChange={(e) => setScore(e.target.value)} placeholder="Score" />
      </div>
      <button onClick={addGrade} className="create-button">
        Add Grade
      </button>
    </div>
  );
};

export default AddGrade;
