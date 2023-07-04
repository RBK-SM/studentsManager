import React from "react";
import DetailsTeachers from "./DetailsTeachers";

const Teachers = (props) => {
  return (
    <div>
      {props.data.map((item, i) => (
        <div key={i}>
          <DetailsTeachers customers={item} />
        </div>
      ))}
    </div>
  );
};

export default Teachers;