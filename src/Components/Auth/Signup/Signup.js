import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="column card card-body" id="register">
        <h2>Create an account</h2>
        <form className="signup form" action="#">
          <div className="textInput">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> person </span>
          </div>

          <div className="textInput">
            <input
              type="text"
              placeholder="Username (unique)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> person </span>
          </div>

          <div className="textInput">
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> alternate_email </span>
          </div>

          <div className="textInput">
            <input
              type="text"
              placeholder="Phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <span class="material-icons-outlined">numbers</span>
          </div>

          <div className="textInput">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> lock </span>
          </div>

          <div className="textInput">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> lock_clock </span>
          </div>

          {error && <p className="error">{error}</p>}

          <button disabled={loading} className="button" type="submit">
            <span>Submit now</span>
          </button>

          <div className="info text-center my-3">
            Already have an account?{" "}
            <Link to="/login" className="text-dark ">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
