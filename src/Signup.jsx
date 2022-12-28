import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="container">
      <h1>Signup</h1>
      <br />
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input className="w-2/5 rounded-lg border-amber-700	 p-4 pr-12 text-sm shadow-sm" name="name" type="text" />
        </div>
        <div>
          Email:{" "}
          <input className="w-2/5 rounded-lg border-amber-700	 p-4 pr-12 text-sm shadow-sm" name="email" type="email" />
        </div>
        <div>
          Password:{" "}
          <input
            className="w-2/5 rounded-lg border-amber-700	 p-4 pr-12 text-sm shadow-sm"
            name="password"
            type="password"
          />
        </div>
        <div>
          Password confirmation:{" "}
          <input
            className="w-2/5 rounded-lg border-amber-700	 p-4 pr-12 text-sm shadow-sm"
            name="password_confirmation"
            type="password"
          />
        </div>
        <br />
        <button
          className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
