import React from "react";
import Teachers from "./Teachers";

const ListTeachers = (props) => {
  React.useEffect(() => {
    console.log({ props });
  }, []);
  return (
    <div>
      <h4 className="teacher">Teachers</h4>
      {props.data.map((item, i) => (
        <div key={i}>
          <Teachers
            data={item}
            setRefrech={props.setRefrech}
            setDataTeacher={props.setDataTeacher}
            dataTeacher={props.dataTeacher}
          />
        </div>
      ))}
    </div>
  );
};

export default ListTeachers;
