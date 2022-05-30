import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function EditTeacherInfo() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({});
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useNavigate();

  // get data
  useEffect(() => {
    axiosInstance
      .get(`/teacher/single-teacher/${id}`)
      .then((response) => {
        setTeacher(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // handle change
  const handleChange = (e) => {
    const newData = { ...teacher };
    newData[e.target.name] = e.target.value;
    setTeacher(newData);
  };

  // file change
  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  // update handler
  const updateHandler = (e) => {
    e.preventDefault();

    // data
    const formData = new FormData();

    formData.append("first_name", teacher.first_name);
    formData.append("last_name", teacher.last_name);
    formData.append("phone", teacher.phone);
    formData.append("email", teacher.email);
    formData.append("address", teacher.address);
    formData.append("subject", teacher.subject);
    formData.append("religion", teacher.religion);
    formData.append("degree", teacher.degree);
    formData.append("institution", teacher.institution);
    formData.append("cgpa", teacher.cgpa);
    formData.append("salary", teacher.salary);
    if (file !== null) {
      formData.append("avatar", file);
    } else {
      formData.append("avatar", teacher.avatar);
    }

    axiosInstance
      .put(`/teacher/update/${id}`, formData)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setError("");
          setSuccess(response.data.message);
          history(-1);
        } else {
          setError("Student updated failed.!");
          setSuccess("");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Student updated failed.!");
        setSuccess("");
        setLoading(false);
      });
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Update Teacher information</h3>
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

        <form onSubmit={updateHandler} encType="multipart/form-data">
          <div class="row">
            <div class="col">
              <label for="firstName">First Name *</label>
              <input
                type="text"
                name="first_name"
                value={teacher?.first_name}
                onChange={handleChange}
                className="form-control"
                placeholder="First Name"
                required
              />
            </div>
            <div class="col">
              <label for="lastName">Last Name *</label>
              <input
                type="text"
                name="last_name"
                value={teacher?.last_name}
                onChange={handleChange}
                className="form-control"
                placeholder="Last Name"
                required
              />
            </div>
            <div class="col">
              <label for="phone">Phone *</label>
              <input
                type="phone"
                name="phone"
                value={teacher?.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Phone"
                required
              />
            </div>
            <div class="col">
              <label for="phone">E-mail *</label>
              <input
                type="email"
                name="email"
                value={teacher?.email}
                onChange={handleChange}
                className="form-control"
                placeholder="E-mail"
                required
                disabled
              />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="address">Address *</label>
              <textarea
                name="address"
                value={teacher?.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Address"
                required
              ></textarea>
            </div>
            <div class="col-md-3">
              <label for="subject">Subject *</label>
              <select
                name="subject"
                value={teacher?.subject}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="Bangla">Bangla</option>
                <option value="English">English</option>
                <option value="Math">Math</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="ICT">ICT</option>
                <option value="Religion">Religion</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="religion">Religion *</label>
              <input
                type="text"
                name="religion"
                value={teacher?.religion}
                onChange={handleChange}
                placeholder="Religion"
                className="form-control"
                required
              />
            </div>
            <div class="col-md-3">
              <img
                src={`http://localhost:8000/uploads/${teacher?.avatar}`}
                alt="teacher"
                id="update-teacher-img"
              />
              <label for="avatar" className="mt-3">
                Updated upload Profile Avatar
              </label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileSelect}
                className="form-control"
                accept="image/*"
              />
            </div>
          </div>

          <div class="row my-3">
            <div class="col-md-3">
              <label for="degree">Degree *</label>
              <input
                type="text"
                name="degree"
                value={teacher?.degree}
                onChange={handleChange}
                className="form-control"
                placeholder="Degree"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="institution">Institution *</label>
              <input
                type="text"
                name="institution"
                value={teacher?.institution}
                onChange={handleChange}
                className="form-control"
                placeholder="Institution"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="cgpa">CGPA *</label>
              <input
                type="text"
                name="cgpa"
                value={teacher?.cgpa}
                onChange={handleChange}
                className="form-control"
                placeholder="CGPA"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="salary">Salary (TK) *</label>
              <input
                type="text"
                name="salary"
                value={teacher?.salary}
                onChange={handleChange}
                className="form-control"
                placeholder="Salary"
                required
              />
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
