import React, { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function AddNotice() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  // data
  const data = {
    title,
    date,
    message,
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance({
      mode: "no-cors",
      method: "post",
      url: `/notice/post-notice`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
        } else {
          setSuccess("");
          setError("Notice added  failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setError("Notice added failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-3">Add Notice</h3>
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
        <form onSubmit={handleSubmit}>
          <div className="row my-3">
            <div class="col-md-6">
              <label for="title">Notice title *</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="Notice title"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="date">Date *</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div class="col-md-6 my-3">
              <label for="message">Message *</label>
              <textarea
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-success"
          />
        </form>
      </div>
    </>
  );
}
