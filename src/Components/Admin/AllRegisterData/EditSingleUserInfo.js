import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function EditSingleUserInfo() {
  const form = useRef(null);
  const { email } = useParams();

  const [student, setStudent] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  // get data
  useEffect(() => {
    axiosInstance
      .get(`/auth/single-student/${email}`)
      .then((response) => {
        setStudent(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  // handle change
  const handleChange = (e) => {
    const newData = { ...student };
    newData[e.target.name] = e.target.value;
    setStudent(newData);
  };

  // update handler
  const updateHandler = (e) => {
    e.preventDefault();

    axiosInstance
      .put(`/auth/update/single-student/${email}`, student)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setError("");
          setSuccess(response.data.message);
          // history(-1);
        } else {
          setError("Student updated failed.!");
          setSuccess("");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Student updated failed.!");
        setSuccess("");
        setLoading(false);
      });
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Update information</h3>
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
        <form onSubmit={updateHandler}>
          <div class="row">
            <div class="col">
              <label for="name">Full name</label>
              <input
                type="text"
                name="full_name"
                className="form-control"
                placeholder="First name"
                value={student?.full_name}
                onChange={handleChange}
              />
            </div>
            <div class="col">
              <label for="name">Username</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                placeholder="Last name"
                value={student?.user_name}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-4">
              <label for="name">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="E-mail"
                value={student?.email}
                onChange={handleChange}
                disabled
              />
            </div>
            <div class="col-md-4">
              <label for="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={student?.phone}
                onChange={handleChange}
                disabled
              />
            </div>
            <div class="col-md-4">
              <label for="name">Role</label>
              <select
                name="role"
                onChange={handleChange}
                className="form-control"
                disabled
              >
                <option value="user">Student</option>
                <option value="teacher">Teacher</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Update Info"
            className="btn btn-outline-success"
          />
        </form>
      </div>
    </>
  );
}
