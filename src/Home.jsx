import axios from "axios";
import { ResumeShow } from "./ResumeShow";
import { useState, useEffect } from "react";

export function Home() {
  const [isResumesVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});
  const [resumes, setResumes] = useState([]);

  // const resumes = [
  //   {
  //     id: 1,
  //     student: {
  //       photo: "https://via.placeholder.com/150",
  //       first_name: "First",
  //       last_name: "Last Name",
  //       short_bio: "I'm a rockstar",
  //       online_resume_url: "https://via.placeholder.com/150",
  //       experience: { start_date: "02 / 01 / 2019", end_date: "03 / 02 / 2022", job_title: "Analyst" },
  //     },
  //   },
  //   {
  //     id: 2,
  //     photo: "https://via.placeholder.com/300",
  //     first_name: "Second",
  //     last_name: "Last Name",
  //     online_resume_url: "https://via.placeholder.com/150",
  //     experience: { start_date: "02 / 01 / 2019", end_date: "03 / 02 / 2022", job_title: "Analyst" },
  //   },
  // ];

  const handleUpdateResume = (params, successCallback) => {
    console.log("handleUpdateResume", params);

    axios.get(`http://localhost:3000/students/1.json`, params).then((response) => {
      setResumes(
        resumes.map((resume) => {
          if (1 === response.data.id) {
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
