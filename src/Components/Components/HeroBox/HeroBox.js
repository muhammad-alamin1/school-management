import {
  faChalkboardTeacher,
  faGraduationCap,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./herobox.css";

export default function HeroBox() {
  return (
    <div className="container">
      <div className="row text-center heroBox">
        <div className="card col-md-4 card-div ">
          <Link to="/our-teachers">
            <div className="card-body">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="header-icon"
              />
              <h5 className="card-title">Our Teachers</h5>
            </div>
          </Link>
        </div>

        <div className="card col-md-4 card-div">
          <Link to="">
            <div className="card-body">
              <FontAwesomeIcon icon={faGraduationCap} className="header-icon" />
              <h5 className="card-title">Our Top Students</h5>
            </div>
          </Link>
        </div>

        <div className="card col-md-4 card-div">
          <Link to="">
            <div className="card-body">
              <FontAwesomeIcon icon={faLocationArrow} className="header-icon" />
              <h5 className="card-title">Our Campus</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
