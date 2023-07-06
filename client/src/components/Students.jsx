import React, { useState } from 'react';
import StudentsInfo from './StudentsInfo.jsx';

function Students(props) {
  const [currentView, setCurrentView] = useState('students');

const changeView = (view) => {
  setCurrentView(view);
};

return (
  <div>
    {currentView === 'studentsInfo' ? (
      <div>
        <StudentsInfo data1={props.data} />
        <button className="btn1" onClick={() => changeView('students')}>Less Info</button>
      </div>
    ) : (
      <div className="card">
        <div className="card-item">
          <div className="img">
            <img src={props.data.image} alt="Student" />
          </div>
          <center>
            <span>{props.data.name}</span>
          </center>
          <p className="job">student</p>
          <button  onClick={() => changeView('studentsInfo')}>More Info</button>
        </div>
      </div>
    )}
  </div>
);
    }
      export default Students;