import axios from "axios";
import { ResumeShow } from "./ResumeShow";
import { useState, useEffect } from "react";

export function Home() {
  const [resumes, setResumes] = useState([]);
  const [isResumesVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const resumes = [
    {
      id: 1,
      photo: "https://via.placeholder.com/150",
      first_name: "First",
      last_name: "Last Name",
      short_bio: "I'm a rockstar",
      online_resume_url: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/300",
      first_name: "Second",
      last_name: "Last Name",
      online_resume_url: "https://via.placeholder.com/150",
    },
  ];

  const handleUpdateResume = (id, params, successCallback) => {
    console.log("handleUpdateResume", params);
    axios.patch(`http://localhost:3000/resumes/${id}.json`, params).then((response) => {
      setResumes(
        resumes.map((resume) => {
          if (resume.id === response.data.id) {
            return response.data;
          } else {
            return resume;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };

  return (
    <div>
      <ResumeShow resume={currentResume} onUpdateResume={handleUpdateResume} />
    </div>
  );
}
