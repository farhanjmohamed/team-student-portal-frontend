import { useState } from "react";
import "./App.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ResumeShow } from "./ResumeShow";

function App() {
  const [resume, setResume] = useState({
    id: 1,
    student: "spongebob",
    skills: ["test1 ", "test2"],
    education: "test2",
    capstone: "test4",
  });
  console.log(resume["student"]);
  return (
    <div>
      <Signup />
      <Login />
      <br />
      <ResumeShow resume={resume} />
      <br />
      <LogoutLink />
    </div>
  );
}

export default App;
