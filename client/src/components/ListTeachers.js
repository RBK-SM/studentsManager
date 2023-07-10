import React from "react";
import Teachers from "./Teachers.js";


const ListTeachers = (props) => {
  React.useEffect(() => {
    console.log({ props });
  }, []);
  return (
    <div className="parent">
     
       <center><div>
       
      <h4 >Teachers</h4>
      </div></center>
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
