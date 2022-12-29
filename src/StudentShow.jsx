import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function StudentShow() {
  const [student, setStudent] = useState({});
  const params = useParams();

  const handleShowStudent = () => {
    axios.get(`http://localhost:3000/students/${params.id}.json`).then((response) => {
      console.log(response.data);
      setStudent(response.data);
    });
  };

  useEffect(handleShowStudent, []);

  return (
    <div>
      <h1 className="text-3xl font-bold sm:text-4xl">STUDENT INFORMATION</h1>
      <br />
      <div className="block">
        <p>
          Student Name: {student.first_name} {student.last_name}
        </p>
        <br />
        <p>Student Email: {student.email}</p>
        <br />
        <p>Phone Number: {student.phone_number}</p>
        <br />
        <p>Short Bio: {student.short_bio}</p>
        <br />
        <p>Linkedin: {student.linkedin_url}</p>
        <br />
        <p>Twitter: {student.twitter_handle}</p>
        <br />
        <p>Personal Website: {student.personal_site_url}</p>
        <br />
        <p>Online Resume: {student.online_resume_url}</p>
        <br />
        <p>Github: {student.github_url}</p>
        <br />
        <p>Photo: {student.photo_url}</p>
        <br />
      </div>
    </div>
  );
}
