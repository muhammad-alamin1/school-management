import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import logo from "../../../images/logo.webp";
import "./nav.css";

export default function Nav() {
  // token
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  // user
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  // remove token or logout
  const removeToken = () => {
    localStorage.removeItem("user");
    cookies.remove("access_token");
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="btn"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="dropdown-nav-academics"
                >
                  <Link className="" aria-current="page" to="">
                    <span id="nav-academics">Academics</span>
                  </Link>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item" to="">
                    Facilities
                  </Link>
                  <Link className="dropdown-item" to="">
                    School Uniform
                  </Link>
                  <Link className="dropdown-item" to="">
                    Principal Message
                  </Link>
                  <Link className="dropdown-item" to="">
                    Know Us
                  </Link>
                  <Link className="dropdown-item" to="">
                    Teacher
                  </Link>
                  <Link className="dropdown-item" to="">
                    Top Student
                  </Link>
                  <Link className="dropdown-item" to="">
                    Student Council
                  </Link>
                  <Link className="dropdown-item" to="">
                    Career Counselling
                  </Link>
                  <Link className="dropdown-item" to="">
                    Approach
                  </Link>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact-us">
                  Contact
                </Link>
              </li>
              {token ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <div className="dropdown">
                  {token && (
                    <a
                      className="btn btn-secondary "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="material-icons-outlined" title="Account">
                        account_circle
                      </span>
                    </a>
                  )}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" to="">
                      {parseUserData && token && (
                        <h6>{parseUserData.user_name}</h6>
                      )}
                    </a>
                    <a onClick={removeToken} className="dropdown-item">
                      <span
                        class="material-icons-outlined"
                        title="Logout"
                        id="logout"
                      >
                        logout
                      </span>
                    </a>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
