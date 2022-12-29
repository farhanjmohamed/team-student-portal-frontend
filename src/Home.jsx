import axios from "axios";
import { ResumeShow } from "./ResumeShow";
import { useState, useEffect } from "react";

export function Home() {
  const [isResumesVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});
  const [resumes, setResumes] = useState([]);
  const [id, setId] = useState(setId === 1);

  // const handleUpdateResume = (id, params, successCallback) => {
  //   console.log("handleUpdateResume", params);

  //   axios.patch(`http://localhost:3000/students/+ id + “.json”.json`, params).then((response) => {
  //     setResumes(
  //       resumes.map((resume) => {
  //         if (resume.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return resume;
  //         }
  //       })
  //     );
  //     successCallback();
  //     handleClose();
  //   });
  // };

  const handleUpdateResume = (id, params) => {
    axios
      .patch("http://localhost:3000/students/" + id + ".json", params)
      .then((response) => {
        console.log(response.data);
        setResumes(
          resumes.map((resume) => {
            if (1 === id) {
              return response.data;
            } else {
              return resume;
            }
          })
        );
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleIndexResumes = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setResumes(response.data);
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
