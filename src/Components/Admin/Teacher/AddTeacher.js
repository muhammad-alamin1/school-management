import React, { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";
import "./teacher.css";

export default function AddTeacher() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [religion, setReligion] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [salary, setSalary] = useState("");
  const [file, setFile] = useState(null);

  const [errors, setErrors] = useState({});
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
    setLoading(true);

    // data
    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("address", address);
    formData.append("subject", subject);
    formData.append("religion", religion);
    formData.append("joinDate", joinDate);
    formData.append("degree", degree);
    formData.append("institution", institution);
    formData.append("cgpa", cgpa);
    formData.append("salary", salary);
    formData.append("avatar", file);

    // axios post req
    axiosInstance
      .post(`/teacher/add-teacher/`, formData, {
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
          setError("Teacher added failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data);
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Teacher added failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-3">Add Teacher</h3>
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
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          id="teacher-form"
        >
          <div class="row">
            <div class="col">
              <label for="firstName">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="First Name"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.firstName && errors?.firstName.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="lastName">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="Last Name"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.lastName && errors?.lastName.msg}
                </div>
              )}
            </div>
            <div class="col">
              <label for="phone">Phone *</label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Phone"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.phone && errors?.phone.msg}
                </div>
              )}
            </div>
            <div class="col">
              <label for="email">E-mail *</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="E-mail"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.email && errors?.email.msg}
                </div>
              )}
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="gender">Gender *</label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.gender && errors?.gender.msg}
                </div>
              )}
            </div>
            <div class="col-md-3">
              <label for="dob">Date of birth *</label>
              <input
                type="date"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.dob && errors?.dob.msg}
                </div>
              )}
            </div>
            <div class="col-md-6">
              <label for="address">Address *</label>
              <textarea
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                placeholder="Address"
                required
              ></textarea>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.address && errors?.address.msg}
                </div>
              )}
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="subject">Subject *</label>
              <select
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Subject
                </option>
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
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.subject && errors?.subject.msg}
                </div>
              )}
            </div>
            <div class="col-md-3">
              <label for="religion">Religion *</label>
              <input
                type="text"
                name="religion"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                placeholder="Religion"
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.religion && errors?.religion.msg}
                </div>
              )}
            </div>
            <div class="col-md-3">
              <label for="joinDate">Join Date *</label>
              <input
                type="date"
                name="joinDate"
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.joinDate && errors?.joinDate.msg}
                </div>
              )}
            </div>
            <div class="col-md-3">
              <label for="avatar">Avatar *</label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileSelect}
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.avatar && errors?.avatar.msg}
                </div>
              )}
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="degree">Degree *</label>
              <input
                type="text"
                name="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="form-control"
                placeholder="Degree"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.degree && errors?.degree.msg}
                </div>
              )}
            </div>
            <div class="col-md-3">
              <label for="institution">Institution *</label>
              <input
                type="text"
                name="institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="form-control"
                placeholder="Institution"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.institution && errors?.institution.msg}
                </div>
              )}
            </div>
            <div class="col-md-3">
              <label for="cgpa">CGPA *</label>
              <input
                type="text"
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
            <div class="col-md-3">
              <label for="salary">Salary (TK) *</label>
              <input
                type="text"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="form-control"
                placeholder="Salary"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.salary && errors?.salary.msg}
                </div>
              )}
            </div>
          </div>
          <input type="submit" className="btn btn-outline-success my-4" />
        </form>
      </div>
    </>
  );
}
