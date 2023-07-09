import React from "react";
import Students from "./Students.jsx";

const List = (props) => (
  <div>
    <div className="title">
    <img className="title" src="student.png"/>
    </div>
   
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
