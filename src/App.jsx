import "./App.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ResumeShow } from "./ResumeShow";
function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
      <ResumeShow />
      <br />
      <LogoutLink />
    </div>
  );
}

export default App;
