import React, { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function AddTopStudent() {
  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [registerId, setRegisterId] = useState("");
  const [roll, setRoll] = useState("");
  const [board, setBoard] = useState("");
  const [exam, setExam] = useState("");
  const [examYear, setExamYear] = useState("");
  const [cgpa, setCgpa] = useState("");
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

    formData.append("fullName", fullName);
    formData.append("registerId", registerId);
    formData.append("roll", roll);
    formData.append("board", board);
    formData.append("exam", exam);
    formData.append("examYear", examYear);
    formData.append("cgpa", cgpa);
    if (file) {
      formData.append("avatar", file);
    }

    // axios post req
    axiosInstance
      .post(`/top-student/add-top-student/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
          setErrors("");
        } else {
          setSuccess("");
          setError("Top Student added failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Top Student added failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Add Top Student</h3>

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

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div class="col">
              <label for="fullName">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-control"
                placeholder="Full Name"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.fullName && errors?.fullName.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="registerId">Register ID *</label>
              <input
                type="number"
                name="registerId"
                value={registerId}
                onChange={(e) => setRegisterId(e.target.value)}
                className="form-control"
                placeholder="Register ID"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.registerId && errors?.registerId.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="roll">Board Roll No. *</label>
              <input
                type="number"
                name="roll"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                className="form-control"
                placeholder="Roll No."
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.roll && errors?.roll.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="board">Board *</label>
              <select
                name="board"
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Barishal">Barishal</option>
              </select>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.board && errors?.board.msg}
                </div>
              )}
            </div>
          </div>
          <div className="row my-4">
            <div class="col">
              <label for="exam">Exam *</label>
              <select
                name="exam"
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="JSC">JSC</option>
                <option value="SSC">SSC</option>
              </select>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.exam && errors?.exam.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="examYear">Exam Year *</label>
              <input
                type="number"
                name="examYear"
                value={examYear}
                onChange={(e) => setExamYear(e.target.value)}
                className="form-control"
                placeholder="Exam Year"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.examYear && errors?.examYear.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="cgpa">CGPA *</label>
              <input
                type="number"
                name="cgpa"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                className="form-control"
                placeholder="CGPA"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.cgpa && errors?.cgpa.msg}
                </div>
              )}
            </div>
            <div class="col">
              <label for="avatar">Avatar *</label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileSelect}
                className="form-control"
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.avatar && errors?.avatar.msg}
                </div>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Submit Information"
            className="btn btn-outline-success"
          />
        </form>
      </div>
    </>
  );
}
