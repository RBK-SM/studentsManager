import React from "react";

function StudentsInfo(props) {
  return (
    <div className="card1">
      <center>
        <p>Gender:{props.data1.gender}</p>
        <p>Phone:{props.data1.phone}</p>
        <p>
          Email:
          <br />
          {props.data1.email}
        </p>
        <p>Attendance: {props.data1.attendance_counter}</p>
        <div>
          <button className="btn2">Update info</button>
          <button className="btn2">Delete Info</button>
        </div>
      </center>
    </div>
  );
}

export default StudentsInfo;
