import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <div>
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="/" className="block text-sky-500">
                Home
              </a>
            </li>
            <li>
              <a href="/students/1" className="text-sky-500 transition hover:text-sky-500/75">
                Student 1
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/signup"
            className="block rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
          >
            Signup
          </a>
          <a
            className="block rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
            href="/login"
          >
            Login
          </a>
          <LogoutLink />{" "}
        </div>
      </div>
    </div>
  );
}
