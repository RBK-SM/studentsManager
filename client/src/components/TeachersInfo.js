import React from "react";

function TeachersInfo(props) {
  return (
    <div className="card1">
      <center>
        <p>
          Email:
          <br />
          {props.data.email}
        </p>
        <p>password: {props.data.password}</p>
        <div>
          <button className="btn2">Update info</button>
          <button className="btn2">Delete Info</button>
        </div>
      </center>
    </div>
  );
}

export default TeachersInfo;
