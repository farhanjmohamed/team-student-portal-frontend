import axios from "axios";
import { useState, useEffect } from "react";
import { StudentShow } from "./StudentShow";

export function Home() {
  const [Students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});

  const handleIndexStudents = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  const handleShowStudent = (student) => {
    setCurrentStudent(student);
    console.log(student);
  };

  useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentShow student={currentStudent} />
    </div>
  );
}
