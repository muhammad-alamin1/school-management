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
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axiosInstance from "../../../Hooks/axios";
import muhammad from "../../../images/muhammad.jpeg";
import noPhoto from "../../../images/nophoto.png";
import "./dashboardPanel.css";

export default function DashboardPanel() {
  const [profile, setProfile] = useState({});

  const history = useNavigate();

  // token
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  // user data
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  // get single user profile data
  useEffect(() => {
    axiosInstance
      .get(`/user/single-user/${parseUserData.email}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setProfile(response?.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // remove token or logout
  const removeToken = () => {
    if (token) {
      if (parseUserData) {
        cookies.remove("access_token");
        // localStorage.removeItem("user");
        // history("/login");
      }
    }
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
                  {parseUserData.email === "muhammad.alamindev01@gmail.com" ? (
                    <img
                      className="img-responsive img-rounded"
                      src={muhammad}
                      alt="User picture"
                    />
                  ) : profile && profile.avatar ? (
                    <img
                      className="img-responsive img-rounded"
                      src={`http://localhost:8000/uploads/${profile.avatar}`}
                      alt="User picture"
                    />
                  ) : (
                    <img
                      className="img-responsive img-rounded"
                      src={noPhoto}
                      alt="User picture"
                    />
                  )}
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
                    <span className="user-role">User</span>
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
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/all-register/profile-data"
                            >
                              All Register Student Profile Info
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/student/admission"
                            >
                              Student Admission
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/student/admission/info"
                            >
                              Admission Information
                            </Link>
                            <Link className="dropdown-item" to="">
                              Add Top Student
                            </Link>
                            <Link className="dropdown-item" to="">
                              Top Student Information
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
                              <span>Teachers</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/add-teacher/"
                            >
                              Add Teacher
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/teacher/information"
                            >
                              Teachers Information
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
                              <span>Examinations</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" to="">
                              Exam Schedule
                            </a>
                            <a className="dropdown-item" to="">
                              Exam Result
                            </a>
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
                              <span>Attendance</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" to="">
                              Student Attendance
                            </a>
                            <a className="dropdown-item" to="">
                              Teacher Attendance
                            </a>
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
                              <span>Academics</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" to="">
                              Class Timetable
                            </a>
                            <a className="dropdown-item" to="">
                              Teacher Timetable
                            </a>
                            <a className="dropdown-item" to="">
                              Subject
                            </a>
                            <a className="dropdown-item" to="">
                              Subject Group
                            </a>
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
                              <span>Communicate</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" to="">
                              Notice Board
                            </a>
                            <a className="dropdown-item" to="">
                              Send Email
                            </a>
                            <a className="dropdown-item" to="">
                              Send SMS
                            </a>
                            <a className="dropdown-item" to="">
                              Email / SMS Log
                            </a>
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
                              <span>Online Course</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" to="">
                              Online Course
                            </a>
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
                              <span>Others</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/add-notice"
                            >
                              Notice
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/admin/notice-info"
                            >
                              Notice Info
                            </Link>
                          </ul>
                        </div>
                      </li>
                    </>
                  ) : (
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
                              <span>Profile</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            {!profile ? (
                              <Link
                                className="dropdown-item"
                                to="/dashboard/user/create-profile/"
                              >
                                Create Profile
                              </Link>
                            ) : (
                              ""
                            )}
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/profile/"
                            >
                              Profile
                            </Link>
                            {profile ? (
                              <Link
                                className="dropdown-item"
                                to={`/dashboard/user/update/profile/${profile.email}`}
                              >
                                Update Profile
                              </Link>
                            ) : (
                              ""
                            )}
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
                              <span>Online Course</span>
                            </Link>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/online-course/class-6/"
                            >
                              Class-6
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/online-course/class-7/"
                            >
                              Class-7
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/online-course/class-8/"
                            >
                              Class-8
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/online-course/class-9/"
                            >
                              Class-9
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/online-course/class-10/"
                            >
                              Class-10
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="/dashboard/user/online-course/ssc-candidate/"
                            >
                              SSC Candidate
                            </Link>
                          </ul>
                        </div>
                      </li>
                    </>
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
          {parseUserData.email === "muhammad.alamindev01@gmail.com"
            ? // <DashboardFront />
              ""
            : // <Profile />
              ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
