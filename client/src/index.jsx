import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import List from "./components/ListStudents.jsx";
import AboutUs from "./components/AboutUs.jsx";
import axios from "axios";
import Grade from "./components/Grade.js";
import $, { data } from "jquery";
import ListTeachers from "./components/ListTeachers.js";

const App = () => {
  const [dataStudent, setDataStudent] = useState([]);
  const [currentView, setCurrentView] = useState("students");
  const [grades, setGrades] = useState([]);
  const [dataTeacher, setDataTeacher] = useState([]);
  const [refrech, setRefrech] = useState(false);

  useEffect(() => {
    $.ajax({
      url: "/data.json",
      success: (data) => {
        console.log(data);
        setDataStudent(data);
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }, []);
  ///fetch data grade///
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/SM/teachers/")
      .then((response) => {
        setGrades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refrech]);
  ///fetch data teacher///
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/SM/teachers/")
      .then((response) => {
        setDataTeacher(response.data);
      })
      .catch((error) => console.log(error));
  }, [refrech]);
  const changeView = (view) => {
    setCurrentView(view);
  };

  let content;
  if (currentView === "about") {
    content = <AboutUs />;
  } else if (currentView === "teachers") {
    content = (
      <ListTeachers
        data={dataTeacher}
        setRefrech={setRefrech}
        setDataTeacher={setDataTeacher}
        dataTeacher={dataTeacher}
      />
    );
  } else if (currentView === "students") {
    content = <List data={dataStudent} />;
  } else if (currentView === "grades") {
    content = <Grade data={grades} />;
  } else if (currentView === "contact") {
    content = <ContactUs />;
  } else {
    content = <List items={items} />;
  }

  return (
    <div>
      <header className="header">
        <img
          className="logo"
          src="	https://dreamslms-wp.dreamguystech.com/wp-content/themes/dreamslms/assets/images/logo.svg"
          alt="Logo"
          width="180"
        />
        <nav className="nav">
          <ul className="list">
            <div className="list-item">
              <button onClick={() => changeView("about")}>About Us</button>
            </div>
            <div className="list-item">
              <button onClick={() => changeView("teachers")}>Teachers</button>
            </div>
            <div className="list-item">
              <button onClick={() => changeView("students")}>Students</button>
            </div>
            <div className="list-item">
              <button onClick={() => changeView("grades")}>Grades</button>
            </div>
            <div className="list-item">
              <button onClick={() => changeView("contact")}>Contact Us</button>
            </div>
          </ul>
        </nav>
      </header>
      {content}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
