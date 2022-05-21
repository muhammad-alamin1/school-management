import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const cookies = new Cookies();
  const history = useNavigate();

  // submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      email,
      user_password: password,
    };

    axios({
      mode: "no-cors",
      method: "post",
      url: `http://localhost:8000/auth/login`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response.data.userData);
        setErrors("");
        if (response.status === 200 || response.status === 201) {
          cookies.set("access_token", response.data.access_token, {
            path: "/",
          });
          localStorage.setItem("user", JSON.stringify(response.data.userData));
          history("/dashboard");
          setSuccess(response.data.message);
          setError("");
        } else {
          setSuccess("");
          setError("Login failed.!");
        }
        setLoading(false);
      })
      .catch(function (errors) {
        console.log(errors);
        setSuccess("");
        setErrors(errors.response.data);
        setError("Login failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="column card card-body" id="signIn">
        <h2>Sign In Your Account</h2> <br />
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
        <form onSubmit={handleSubmit} className="login form">
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
          </div>{" "}
          <div style={{ color: "red" }}>
            {errors.user == 1 && errors.message}
          </div>
          <br />
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
          </div>{" "}
          <div style={{ color: "red" }}>
            {errors.user == 2 && errors.message}
          </div>
          <br />
          <button disabled={loading} className="button" type="submit">
            <span>Sign In</span>
          </button>
          <div className="info text-center my-3 ">
            Don't have an account?{" "}
            <Link to="/register" className="text-dark ">
              Signup
            </Link>{" "}
          </div>
        </form>
      </div>
    </>
  );
}
