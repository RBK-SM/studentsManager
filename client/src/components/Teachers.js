import React, { useState } from "react";
import DetailsTeachers from "./DetailsTeachers.js";

function Teachers(props) {
  const [currentView, setCurrentView] = useState("Teachers");

  const changeView = (view) => {
    setCurrentView(view);
  };
  React.useEffect(() => {
    console.log({ propsTeacher: props });
  }, []);
  return (
    <div>
      {currentView === "TeachersInfo" ? (
        <div>
          <DetailsTeachers
            data={props.data}
            setRefrech={props.setRefrech}
            setDataTeacher={props.setDataTeacher}
            dataTeacher={props.dataTeacher}
          />
          <button className="btn1" onClick={() => changeView("Teachers")}>
            Less Info
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="card-item">
            <center>
              <span>{props.data.name}</span>
            </center>
            <p className="job">Teacher</p>
            <button onClick={() => changeView("TeachersInfo")}>
              More Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Teachers;
