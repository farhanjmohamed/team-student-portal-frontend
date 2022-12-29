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

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdateStudent(student.id, params, () => event.target.reset());
  };

  const handleUpdateStudent = (id, params, successCallback) => {
    axios.patch("http://localhost:3000/students/" + id + ".json", params).then((response) => {
      console.log(response.data);
      setStudent(response.data);
      successCallback();
      handleClose();
    });
  };

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
      <h1 className="text-3xl font-bold sm:text-4xl">EDIT STUDENT</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          Student Name: <input name="first_name" type="text" />
        </div>
        <br />
        <div>
          Student Email: <input name="email" type="text" />
        </div>
        <br />
        <div>
          Phone Number: <input name="phone_number" type="number" />
        </div>
        <br />
        <div>
          Short Bio: <input name="short_bio" type="body" />
        </div>
        <br />
        <div>
          Linkedin: <input name="linked_in_url" type="text" />
        </div>
        <br />
        <div>
          Twitter: <input name="twitter_url" type="text" />
        </div>
        <br />
        <div>
          Personal Website: <input name="personal_website" type="text" />
        </div>
        <br />
        <div>
          Online Resume: <input name="online_resume" type="text" />
        </div>
        <br />
        <div>
          Github: <input name="github" type="text" />
        </div>
        <br />
        <div>
          Photo: <input name="photo" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Update resume
        </button>
      </form>
    </div>
  );
}
