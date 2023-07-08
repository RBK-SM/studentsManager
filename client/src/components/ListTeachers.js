import React from "react";
import DetailsTeachers from "./DetailsTeachers";

const Teachers = (props) => {
  return (
    <div>
      <h4>Teachers</h4>
      {props.data.map((item, i) => (
        <div key={i}>
          <DetailsTeachers Name={item} />
        </div>
      ))}
    </div>
  );
};

export default Teachers;