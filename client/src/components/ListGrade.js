import React from "react";
import Grades from "./Grade.js";

const ListGrades = (props) => {
  React.useEffect(() => {
    console.log({ props });
  }, []);
  return (
    <div>
      <h4 className="grade">Grades</h4>
      {props.data.map((item, i) => (
        <div key={i}>
          <Grades
            data={item}
            setRefrech={props.setRefrech}
            setDataGrade={props.setDataGrade}
            dataGrade={props.dataGrade}
          />
        </div>
      ))}
    </div>
  );
};

export default ListGrades;
