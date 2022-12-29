import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Home } from "./Home";
import { StudentShow } from "./StudentShow";
import { Header } from "./Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/students/:id" element={<StudentShow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutLink />} />
        </Routes>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default App;
