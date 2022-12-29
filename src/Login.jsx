import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <br />
      <h1 className="text-lg font-bold">LOGIN</h1>
      <br />
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <input
            className="outline-sky-500	w-2/5 rounded-xl items-center m-1 border-sky-500 p-3 pr-12 text-sm shadow-sm"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <br />
          <input
            className="outline-sky-500 w-2/5 rounded-xl m-1 items-center border-sky-500 p-3 pr-12 text-sm shadow-sm"
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button
          className="ml-3 inline-block rounded-lg bg-sky-500 px-5 py-3 text-sm font-medium text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
