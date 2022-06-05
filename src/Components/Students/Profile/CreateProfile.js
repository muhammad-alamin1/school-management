import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function CreateProfile() {
  const history = useNavigate();
  // user data
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [userClass, setClass] = useState("");
  const [section, setSection] = useState("");
  const [roll, setRoll] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [dob, setDob] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherPhone, setFatherPhone] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");

  const [student, setStudent] = useState({});
  const [success, setSuccess] = useState();
  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // get login student data
  useEffect(() => {
    axiosInstance
      .get(`/auth/single-student/${parseUserData.email}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setStudent(response?.data.data);
        } else {
          // setError("Data not found.!");
        }
      })
      .catch((err) => {
        // setError("Data not found.!");
      });
  }, [parseUserData.email]);

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

    formData.append("fullName", fullName);
    formData.append("phone", student.phone);
    formData.append("email", student.email);
    formData.append("userClass", userClass);
    formData.append("section", section);
    formData.append("roll", roll);
    formData.append("religion", religion);
    formData.append("gender", gender);
    formData.append("religion", religion);
    formData.append("dob", dob);
    formData.append("currentAddress", currentAddress);
    formData.append("permanentAddress", permanentAddress);
    formData.append("fatherName", fatherName);
    formData.append("fatherPhone", fatherPhone);
    formData.append("fatherOccupation", fatherOccupation);
    formData.append("avatar", file);

    // axios post req
    axiosInstance
      .post(`/user/create-profile/`, formData, {
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
          history("/dashboard");
        } else {
          setSuccess("");
          setError("Profile created failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data);
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Profile created failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Create Profile</h3>
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
          id="user-create-profile"
        >
          <div class="row">
            <div class="col">
              <label for="fullName">Full Name *</label>
              <input
                type="text"
                name="fullName"
                defaultValue={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-control"
                placeholder="Full Name"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.firstName && errors?.firstName.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="phone">Phone *</label>
              <input
                type="phone"
                name="phone"
                defaultValue={student.phone}
                // onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="Phone"
                required
                disabled
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
                defaultValue={student.email}
                // onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="E-mail"
                required
                disabled
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.email && errors?.email.msg}
                </div>
              )}
            </div>
          </div>
          <div class="row my-4">
            <div class="col">
              <label for="userClass">Class *</label>
              <select
                name="userClass"
                value={userClass}
                onChange={(e) => setClass(e.target.value)}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Class
                </option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.userClass && errors?.userClass.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="section">Section *</label>
              <select
                name="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="form-control"
              >
                <option value="">Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
              </select>
            </div>

            <div class="col">
              <label for="roll">Roll No. *</label>
              <input
                type="number"
                name="roll"
                defaultValue={roll}
                onChange={(e) => setRoll(e.target.value)}
                className="form-control"
                placeholder="Roll No. "
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.roll && errors?.roll.msg}
                </div>
              )}
            </div>
            <div class="col">
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
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.gender && errors?.gender.msg}
                </div>
              )}
            </div>
            <div class="col">
              <label for="religion">Religion *</label>
              <input
                name="religion"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className="form-control"
                placeholder="Religion"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.religion && errors?.religion.msg}
                </div>
              )}
            </div>
          </div>
          <div class="row my-4">
            <div class="col">
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

            <div class="col">
              <label for="avatar">Image *</label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileSelect}
                className="form-control"
                accept="image/*"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.avatar && errors?.avatar.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="currentAddress">Current Address *</label>
              <textarea
                name="currentAddress"
                className="form-control"
                placeholder="Current address"
                defaultValue={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                required
              ></textarea>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.currentAddress && errors?.currentAddress.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="permanentAddress">Permanent Address *</label>
              <textarea
                name="permanentAddress"
                className="form-control"
                placeholder="Permanent address"
                defaultValue={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
                required
              ></textarea>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.permanentAddress && errors?.permanentAddress.msg}
                </div>
              )}
            </div>
          </div>
          <div class="row my-4">
            <div class="col">
              <label for="fatherName">Father Name *</label>
              <input
                type="text"
                name="fatherName"
                defaultValue={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                className="form-control"
                placeholder="Father Name"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.fatherName && errors?.fatherName.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="fatherPhone">Father Phone *</label>
              <input
                type="phone"
                name="fatherPhone"
                defaultValue={fatherPhone}
                onChange={(e) => setFatherPhone(e.target.value)}
                className="form-control"
                placeholder="Phone"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.fatherPhone && errors?.fatherPhone.msg}
                </div>
              )}
            </div>

            <div class="col">
              <label for="fatherOccupation">Father Occupation *</label>
              <input
                type="text"
                name="fatherOccupation"
                defaultValue={fatherOccupation}
                onChange={(e) => setFatherOccupation(e.target.value)}
                className="form-control"
                placeholder="Father Occupation"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.fatherOccupation && errors?.fatherOccupation.msg}
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
