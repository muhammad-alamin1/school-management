import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  // submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="column card card-body" id="signIn">
        <h2>Sign In Your Account</h2> <br />
        <form className="login form" action="#">
          <div className="textInput">
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> alternate_email </span>
          </div>{" "}
          <br />
          <div className="textInput">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="material-icons-outlined"> lock </span>
          </div>{" "}
          <br />
          {error && <p className="error">{error}</p>}
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
