import axios from "axios";
import { useState, useEffect } from "react";
import { ResumeShow } from "./ResumeShow";

export function Home() {
  const [resumes, setResumes] = useState([]);
  const [currentResume, setCurrentResume] = useState({});

  const handleIndexResumes = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setResumes(response.data);
    });
  };

  const handleShowResume = (resume) => {
    setCurrentResume(resume);
    console.log(resume);
  };

  useEffect(handleIndexResumes, []);

  return (
    <div>
      <ResumeShow resume={currentResume} />
    </div>
  );
}
