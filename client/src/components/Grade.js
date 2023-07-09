import React from "react";
import DetailsGrade from "./DetailsGrade";

const Grade = (props) => {
  return (
    <div>
      {props.data.map((item, i) => (
        <div key={i}>
          <DetailsGrade grade={item} />
        </div>
      ))}
    </div>
  );
};

export default Grade;