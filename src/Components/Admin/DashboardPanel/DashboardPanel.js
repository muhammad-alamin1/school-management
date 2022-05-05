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
import muhammad from "../../../images/logo.png";
import "./dashboardPanel.css";

export default function DashboardPanel() {
  return (
    <div className="page-wrapper chiller-theme bg-dark toggled">
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
                <strong>Muhammad Al-amin</strong>
              </span>
              <span className="user-role">Administrator</span>
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
                      <span>Admissions</span>
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
          <Link to="#">
            <FontAwesomeIcon icon={faPowerOff} />
          </Link>
        </div>
      </nav>
      <div className="text-white" id="dash">
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
      </div>
    </div>
  );
}
