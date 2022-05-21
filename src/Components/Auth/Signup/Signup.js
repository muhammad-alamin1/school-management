import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  // const form = useRef(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      full_name: fullName,
      user_name: username,
      email,
      phone: number,
      school_code: code,
      user_password: password,
      confirm_password: confirmPassword,
    };

    axios({
      mode: "no-cors",
      method: "post",
      url: `http://localhost:8000/auth/register`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
          setErrors("");
          history("/login");
        } else {
          setSuccess("");
          setError("Student register failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setErrors(error.response.data.errors);
        setError("Student register failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="column card card-body" id="register">
        <h2>Create an account</h2>
        {success && (
          <div class="alert alert-success alert-dismissible fade show">
            <strong>Success!</strong> {success}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
          </div>
        )}
        {error && (
          <div class="alert alert-danger alert-dismissible fade show">
            <strong>Error!</strong> {error}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
          </div>
        )}
        {loading && (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="signup form">
          <div className="textInput">
            <input
              type="text"
              name="full_name"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <span className="material-icons-outlined"> person </span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.full_name && errors?.full_name.msg}
          </div>

          <div className="textInput">
            <input
              type="text"
              name="user_name"
              placeholder="Username (unique)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> person </span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.user_name && errors?.user_name.msg}
          </div>

          <div className="textInput">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> alternate_email </span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.email && errors?.email.msg}
          </div>

          <div className="textInput">
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <span class="material-icons-outlined">numbers</span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.phone && errors?.phone.msg}
          </div>

          <div className="textInput">
            <input
              type="number"
              name="school_code"
              placeholder="Codes"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <span class="material-icons-outlined">numbers</span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.school_code && errors?.school_code.msg}
          </div>

          <div className="textInput">
            <input
              type="password"
              name="user_password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> lock </span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.user_password && errors?.user_password.msg}
          </div>

          <div className="textInput">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> lock_clock </span>
          </div>
          <div style={{ color: "red" }}>
            {errors?.confirm_password && errors?.confirm_password.msg}
          </div>

          <button className="button" type="submit">
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
