import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../images/logo.png";
import DashboardPanel from "../DashboardPanel/DashboardPanel";
import "./admission.css";

export default function StudentAdmissionInfo() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  return (
    <div className="admission-info">
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-3">Admission Information</h3>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"># Roll No.</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Section</th>
              <th scope="col">Phone</th>
              <th scope="col">Sex</th>
              <th scope="col">Admission Date</th>
              <th scope="col">Image</th>
              <th scope="col" className="bg-info">
                Details
              </th>
              <th scope="col" className="bg-success">
                Update
              </th>
              <th scope="col" className="bg-danger">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
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
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <tr>
              <th scope="row">101</th>
              <td>Muhammad Al-Amin</td>
              <td>Class 7</td>
              <td>A</td>
              <td>+8801315792303</td>
              <td>Male</td>
              <td>05/04/2017</td>
              <td>
                <img src={image} alt="student-photo" />
              </td>
              <td>
                <Link
                  to=""
                  className="text-info"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <span className="material-icons-outlined"> info </span>
                </Link>
              </td>
              <td>
                <Link to="" className="text-success">
                  <span className="material-icons-outlined"> edit </span>
                </Link>
              </td>
              <td>
                <a href="" className="text-danger">
                  <span className="material-icons-outlined"> delete </span>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">101</th>
              <td>Muhammad Al-Amin</td>
              <td>Class 7</td>
              <td>A</td>
              <td>+8801315792303</td>
              <td>Male</td>
              <td>05/04/2017</td>
              <td>
                <img src={image} alt="student-photo" />
              </td>
              <td>
                <Link
                  to=""
                  className="text-info"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <span className="material-icons-outlined"> info </span>
                </Link>
              </td>
              <td>
                <Link to="" className="text-success">
                  <span className="material-icons-outlined"> edit </span>
                </Link>
              </td>
              <td>
                <a href="" className="text-danger">
                  <span className="material-icons-outlined"> delete </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
