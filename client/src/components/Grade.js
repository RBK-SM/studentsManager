import React, { useState } from "react";
import DetailsGrade from "./DetailsGrade.js";

function Grades(props) {
  const [currentView, setCurrentView] = useState("Grades");

  const changeView = (view) => {
    setCurrentView(view);
  };
  React.useEffect(() => {
    console.log({ propsTeacher: props });
  }, []);
  return (
    <div>
      {currentView === "GradesInfo" ? (
        <div>
          <DetailsGrade
            data={props.data}
            setRefrech={props.setRefrech}
            setDataGrade={props.setDataGrade}
            dataGrade={props.dataGrade}
          />
          <button className="btn1" onClick={() => changeView("grades")}>
            Less Info
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="card-item">
            <center>
              <span>{props.data.subject}</span>
            </center>
            <p className="job">Grades</p>
            <button onClick={() => changeView("GradesInfo")}>More Info</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Grades;
