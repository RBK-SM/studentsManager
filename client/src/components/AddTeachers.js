import axios from "axios";
import React, { useState } from "react";

const AddTeachers = () => {
  const [teachersName, setTeachersName] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("")

  const addTeacher = () => {
    const teachers = {
      teachersName: teachersName,
      email: email,
      password:password
    };
    axios
      .post("//URL", teachers)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <div className="create-teachers">
      <div>
        <h2 className="head">Teachers</h2>
      </div>
      <div>
        <input
          onChange={(e) => setTeachersName(e.target.value)}
          placeholder="Teacher name"
        />
      </div>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="password "
        />
      </div>
      <div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password "
        />
      </div>
      <button onClick={addTeacher} className="create-button">
        Add teachers
      </button>
    </div>
  );
};

export default AddTeachers;
