import "./App.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
      <br />
      <LogoutLink />
    </div>
  );
}

export default App;
