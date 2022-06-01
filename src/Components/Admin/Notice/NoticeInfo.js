import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function NoticeInfo() {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get notice data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/notice/all-notice/")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setNotices(response.data.data);
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

  // delete notice
  const deleteNotice = (id) => {
    console.log(id);

    axiosInstance
      .delete(`/notice/delete-notice/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setSuccess("Notice deleted successfully.!");
          setError("");
        } else {
          setError("Notice deleted failed.!");
          setSuccess("");
        }
      })
      .catch((err) => {
        setError("Notice deleted failed.!");
        setSuccess("");
      });
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-3"> Notice Information</h3>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Notice Title</th>
              <th scope="col">Date</th>
              <th scope="col">Created At</th>
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
              <div className="alert alert-danger alert-dismissible fade show my-5">
                <strong>Error!</strong> {error}
              </div>
            )}
            {loading && (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {notices &&
              notices.map((notice, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{notice.title}</td>
                  <td>{notice.date}</td>
                  <td>
                    {new Date(notice.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/admin/update/notice-info/${notice._id}`}
                      className="text-success"
                    >
                      <span className="material-icons-outlined"> edit </span>
                    </Link>
                  </td>
                  <td>
                    <a
                      href=""
                      onClick={() => deleteNotice(notice._id)}
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
    </>
  );
}
