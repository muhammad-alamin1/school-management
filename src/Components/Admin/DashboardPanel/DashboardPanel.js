import {
  faBell,
  faCircle,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCog,
  faPowerOff,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import muhammad from "../../../images/logo.png";
import "./dashboardPanel.css";

export default function DashboardPanel() {
  // token
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  // user data
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  // remove token or logout
  const removeToken = () => {
    // localStorage.removeItem("user");
    cookies.remove("access_token");
  };

  return (
    <>
      {token ? (
        <div className="page-wrapper chiller-theme toggled">
          <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-brand text-center">
                <Link to="/">BRUASS</Link>
              </div>
              <div className="sidebar-header">
                <div className="user-pic">
                  <img
                    className="img-responsive img-rounded"
                    src={muhammad}
                    alt="User picture"
                  />
                </div>
                <div className="user-info">
                  <span className="user-name">
                    {parseUserData && (
                      <strong>{parseUserData?.user_name}</strong>
                    )}
                  </span>
                  {token && parseUserData && parseUserData?.role === "admin" ? (
                    <span className="user-role">Administrator</span>
                  ) : (
                    <span className="user-role">{parseUserData?.role}</span>
                  )}
                  <span className="user-status">
                    <FontAwesomeIcon
                      icon={faCircle}
                      style={{ marginRight: "5px", color: "green" }}
                    />
                    <span>Online</span>
                  </span>
                </div>
              </div>

              {/* <!-- sidebar-search  --> */}
              <div className="sidebar-menu">
                <ul>
                  {parseUserData &&
                  parseUserData.role === "admin" &&
                  parseUserData.email === "muhammad.alamindev01@gmail.com" ? (
                    <>
                      <li className="sidebar-dropdown my-2">
                        <div className="dropdown">
                          <a
                            className="btn "
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <Link to="">
                              <FontAwesomeIcon
                                icon={faTachometerAlt}
                                className="dashboard-icon"
                              />
                              <span>Student Information</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/all-register"
                            >
                              All Student Register Data
                            </Link>
                            <Link className="dropdown-item" to="">
                              Section 1
                            </Link>
                          </ul>
                        </div>
                      </li>
                      <li className="sidebar-dropdown my-2">
                        <div className="dropdown">
                          <a
                            className="btn "
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <Link to="">
                              <FontAwesomeIcon
                                icon={faTachometerAlt}
                                className="dashboard-icon"
                              />
                              <span>Subscribers</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" to="">
                              Section 1
                            </a>
                            <a className="dropdown-item" to="">
                              Section 1
                            </a>
                          </ul>
                        </div>
                      </li>
                    </>
                  ) : (
                    <li className="sidebar-dropdown my-2">
                      <div className="dropdown">
                        <a
                          className="btn "
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <Link to="">
                            <FontAwesomeIcon
                              icon={faTachometerAlt}
                              className="dashboard-icon"
                            />
                            <span>Student</span>
                          </Link>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <a className="dropdown-item" to="">
                            Section 1
                          </a>
                          <a className="dropdown-item" to="">
                            Section 1
                          </a>
                        </ul>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              {/* <!-- sidebar-menu  --> */}
            </div>
            {/* <!-- sidebar-content  --> */}
            <div className="sidebar-footer">
              <Link to="#">
                <FontAwesomeIcon icon={faBell} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faCog} />
              </Link>
              <Link to="/login">
                <FontAwesomeIcon onClick={removeToken} icon={faPowerOff} />
              </Link>
            </div>
          </nav>
          {/* <div className="text-white" id="dash">
        <div className="row">
          <div className="col-md-4 text-dark">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Present Students</h5>
                <h3 class="card-text">591/1000</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-dark">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Present Students</h5>
                <h3 class="card-text">591/1000</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-dark">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Present Teachers</h5>
                <h3 class="card-text">591/1000</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
