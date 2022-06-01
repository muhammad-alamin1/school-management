import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function EditNotice() {
  const { id } = useParams();
  const [notice, setNotice] = useState({});

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  // get data
  useEffect(() => {
    axiosInstance
      .get(`/notice/single-notice/${id}`)
      .then((response) => {
        setNotice(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // handle change
  const handleChange = (e) => {
    const newData = { ...notice };
    newData[e.target.name] = e.target.value;
    setNotice(newData);
  };

  // update handler
  const updateHandler = (e) => {
    e.preventDefault();

    axiosInstance
      .put(`/notice/update-notice/${id}`, notice)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setError("");
          setSuccess(response.data.message);
          history(-1);
        } else {
          setError("Notice updated failed.!");
          setSuccess("");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Notice updated failed.!");
        setSuccess("");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-3">Update Notice</h3>
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
          <div className="row my-3">
            <div class="col-md-4">
              <label for="title">Updated Notice title *</label>
              <input
                type="text"
                name="title"
                value={notice?.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Notice title"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="date">Updated Notice title *</label>
              <input
                type="date"
                name="date"
                value={notice?.date}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="message">Message *</label>
              <textarea
                type="text"
                name="message"
                value={notice?.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Update Info"
            className="btn btn-outline-success my-4"
          />
        </form>
      </div>
    </>
  );
}
