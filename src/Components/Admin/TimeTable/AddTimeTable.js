import React, { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";
import TimeTableInfo from "./TimeTableInfo";

export default function AddTimeTable() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const [userClass, setUserClass] = useState("");
  const [file, setFile] = useState(null);

  // file change
  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // data
    const formData = new FormData();

    formData.append("userClass", userClass);
    if (file) {
      formData.append("file", file);
    }

    // axios post req
    axiosInstance
      .post(`/class-time-table/add-time-table`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
        } else {
          setSuccess("");
          setError("Class Schedule added failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setError("Class Schedule added failed.!");
        setLoading(false);
      });
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Add Timetable</h3>

        <form onSubmit={handleSubmit}>
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
          <div className="row">
            <div class="col-md-6">
              <label for="class">Class *</label>
              <select
                name="class"
                value={userClass}
                onChange={(e) => setUserClass(e.target.value)}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Chose One
                </option>
                <option value="Class-6">Class-6</option>
                <option value="Class-7">Class-7</option>
                <option value="Class-8">Class-8</option>
                <option value="Class-9">Class-9</option>
                <option value="Class-10">Class-10</option>
              </select>
            </div>
            <div className="col">
              <label for="file">Chose file *</label>
              <input
                type="file"
                name="file"
                onChange={handleFileSelect}
                className="form-control"
                placeholder="Exam Title"
                required
                accept=".pdf,.doc"
              />
              <small className="text-muted">Allow Only .pdf & .doc file</small>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-success my-3"
          />
        </form>
        <div className="class-time-table-info">
          <h3 className="my-4">Class Time Table Information</h3>
          <TimeTableInfo />
        </div>
      </div>
    </>
  );
}
