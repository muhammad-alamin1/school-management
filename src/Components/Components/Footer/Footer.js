import {
  faFacebook,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/logo.webp";
import "./footer.css";

export default function Footer() {
  return (
    <div className="" id="footer">
      <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-md-9">
              <h6 style={{ marginBottom: "1.5rem" }}>BRUASS</h6>
              <a href="">Question</a>
              <br />
              <a href="">Help</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h6 style={{ marginBottom: "1.5rem" }}>COMPANY</h6>
          <div className="page-links">
            <a href="">About</a>
            <br />
            <a href="">Privacy & Policy</a>
            <br />
            <a href="">News</a>
            <br />
            <a href="">Course</a>
            <br />
            <a href="">Cookie Settings</a>
            <br />
            <a href="">Cookie Policy</a>
            <br />
          </div>
        </div>
        <div className="col-md-3">
          <h6 style={{ marginBottom: "1.5rem" }}>Useful Links</h6>
          <div className="page-links">
            <a href="">Testimonials</a>
            <br />
            <a href="">FAQ</a>
            <br />
            <a href="">Community</a>
            <br />
            <a href="">Campus Pictures</a>
            <br />
            <a href="">Tuitions</a>
          </div>
        </div>
        <div className="col-md-3">
          <h3>Subscribe Us!</h3>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="form-control py-3 my-3"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              className="form-control"
              id="subscribeBtn"
            />
          </form>
          <div id="contact">
            <h3 className="my-4">Contact</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="contactIcon" />{" "}
              <span>
                {" "}
                7 No. Betmore, Mathbaria, Pirojpur, Barishal, Bangladesh
              </span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="contactIcon" />{" "}
              <span>+8801315792303</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />{" "}
              <span>muhammad.alamindev01@gmail.com</span>
            </p>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} className="contactIcon" />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="contactIcon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className="contactIcon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} className="contactIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} <strong>BRUASS</strong>{" "}
          All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}
