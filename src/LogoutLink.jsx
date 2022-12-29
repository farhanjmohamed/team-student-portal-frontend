import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="text-sky-500 transition hover:text-sky-500/75" href="#" onClick={handleClick}>
      Logout
    </a>
  );
}
