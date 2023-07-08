import React from "react";
import Students from "./Students.jsx";

const List = (props) => (
  <div>
    <h4>students</h4>
  <div className="parent">
    {props.data.map((data, index) => (
      <div key={index}>
        <Students data={data} />
      </div>
    ))}
  </div>
  </div>
);

export default List;
