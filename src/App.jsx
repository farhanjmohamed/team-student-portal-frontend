import "./App.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <Home />
      <Signup />
      <Login />
      <br />
      <LogoutLink />
    </div>
  );
}

export default App;
