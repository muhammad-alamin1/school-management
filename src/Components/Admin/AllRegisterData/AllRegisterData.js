import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";
import "./allregister.css";

export default function AllRegisterData() {
  const [students, setStudents] = useState([]);
  const [modelData, setModelData] = useState({});

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get all student data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/auth/all-student")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const filterData = response.data.data.filter((user) => {
            return user.role === "user";
          });
          setStudents(filterData);
        } else {
          setError("Data not found.!");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Data not found.!");
        setLoading(false);
      });
  }, []);

  // handle info
  const getHandleInfo = (email) => {
    const data = students.filter((user) => user.email === email);
    setModelData(data[0]);
  };

  // delete data
  const deleteStudent = async (email) => {
    console.log(email);
    try {
      axiosInstance
        .delete(`/auth/delete/single-student/${email}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Student deleted successfully.!");
            setError("");
          } else {
            setError("Student deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Student deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <DashboardPanel />
      <div className="sidebar-margin ">
        <h3 className="my-4">Students Register Data</h3>
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
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Username</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
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
            {students &&
              students.map((student, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{student.full_name}</td>
                  <td>{student.user_name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    {new Date(student.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    {new Date(student.updatedAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    <Link
                      to=""
                      onClick={() => getHandleInfo(student.email)}
                      className="text-info"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <span className="material-icons-outlined"> info </span>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/admin/edit/student/${student.email}`}
                      className="text-success"
                    >
                      <span className="material-icons-outlined"> edit </span>
                    </Link>
                  </td>
                  <td>
                    <a
                      href=""
                      onClick={() => deleteStudent(student.email)}
                      className="text-danger"
                    >
                      <span className="material-icons-outlined"> delete </span>
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* information modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {modelData?.full_name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>
                E-mail: <strong>{modelData?.email}</strong>
              </h6>
              <h6>
                Phone: <strong>{modelData?.phone}</strong>
              </h6>
              <h6>
                Role: <strong>Student</strong>
              </h6>
              <h6>
                Sex: <strong>Soon</strong>
              </h6>
              <h6>
                Address: <strong>Soon</strong>
              </h6>
              <h6>
                Parents: <strong>Soon</strong>
              </h6>
              <h6>
                Parents Phone: <strong>Soon</strong>
              </h6>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
