import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Home } from "./Home";
import { StudentShow } from "./StudentShow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/students/:id" element={<StudentShow />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <br />
      <LogoutLink />
    </div>
  );
}

export default App;
