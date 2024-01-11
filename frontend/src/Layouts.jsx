import { Outlet, Link } from "react-router-dom";
export default function Layouts() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/folders">folders</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
