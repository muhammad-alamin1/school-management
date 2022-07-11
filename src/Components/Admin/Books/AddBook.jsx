import React, { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function AddBook() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [userClass, setUserClass] = useState("");

  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  // file change
  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // data
    const formData = new FormData();

    formData.append("bookName", name);
    formData.append("bookCode", code);
    formData.append("userClass", userClass);
    if (file) {
      formData.append("pdfFile", file);
    }

    // axios post req
    axiosInstance
      .post(`/book/add-book`, formData, {
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
          setError("Book added failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setError("Book added failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">Add Book</h2>

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
          <div className="row">
            <div className="col">
              <label htmlFor="bookName">Book name</label>
              <input
                type="text"
                name="bookName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Book name"
                required
              />
            </div>

            <div className="col">
              <label htmlFor="bookCode">Book Code</label>
              <input
                type="number"
                name="bookCode"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="form-control"
                placeholder="Book code"
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col">
              <label htmlFor="userClass">Class</label>
              <select
                value={userClass}
                onChange={(e) => setUserClass(e.target.value)}
                className="form-control"
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
              <label htmlFor="pdfFile">Book File</label>
              <input
                type="file"
                name="pdfFile"
                onChange={handleFileSelect}
                className="form-control"
                accept=".pdf"
                required
              />
              <small className="text-muted">Allow Only .pdf file</small>
            </div>
          </div>
          <div className="col">
            <input
              type="submit"
              value="Submit"
              id="contactUsSubmitBtn"
              className="my-4"
            />
          </div>
        </form>
      </div>
    </>
  );
}
