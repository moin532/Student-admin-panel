// App.js
import React from "react";
import StudentManagementSystem from "./components/Home";
import { useEffect, useState } from "react";

const App = () => {
  const [std, setstd] = useState("");
  // const [student, setstudent] = useState("");

  useEffect(() => {
    // Fetch student data from API
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://3.223.98.72:1337/api/students");
        const datae = await response.json();
        const res = datae.data;

        setstd(res);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <StudentManagementSystem std={std} />
    </div>
  );
};

export default App;
