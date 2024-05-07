import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { courses } from "./components/data";
import Course from "./components/Course";
import "./css/course.css";

function App() {
  return (
    <>
      <Header />

      <div className="course_main">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default App;
