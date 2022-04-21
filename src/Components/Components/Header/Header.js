import {
  faChalkboardTeacher,
  faGraduationCap,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="" id="header">
      <div className="container">
        <h2 id="headline">
          Recite in the
          <span style={{ color: "#ffb606" }}> name of your Lord</span> who
          created
        </h2>
        <div className="row my-5 text-white text-center">
          <div class="card col-md-4 card-div ">
            <div class="card-body">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="header-icon"
              />
              <h5 class="card-title">Our Teachers</h5>
            </div>
          </div>

          <div class="card col-md-4 card-div">
            <div class="card-body">
              <FontAwesomeIcon icon={faGraduationCap} className="header-icon" />
              <h5 class="card-title">Our Top Students</h5>
            </div>
          </div>

          <div class="card col-md-4 card-div">
            <div class="card-body">
              <FontAwesomeIcon icon={faLocationArrow} className="header-icon" />
              <h5 class="card-title">Our Campus</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
