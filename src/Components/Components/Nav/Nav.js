import React from "react";
import logo from "../../../images/logo.webp";
import "./nav.css";

export default function Nav() {
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
                <a className="nav-link active" aria-current="page" to="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="">
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" to="">
                      <span class="material-icons-outlined" title="Logout">
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
