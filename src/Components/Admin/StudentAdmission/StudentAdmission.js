import React, { useState } from "react";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function StudentAdmission() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Student Admission</h3>
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
        <form>
          <div class="row">
            <div class="col">
              <label for="admissionNo">Admission No *</label>
              <input
                type="number"
                name="admissionNo"
                className="form-control"
                placeholder="Admission no"
                required
              />
            </div>
            <div class="col">
              <label for="rollNo">Roll No *</label>
              <input
                type="text"
                name="rollNo"
                className="form-control"
                placeholder="Roll no"
                required
              />
            </div>
            <div class="col">
              <label for="class">Class *</label>
              <select name="class" className="form-control" required>
                <option value="">Select Class</option>
                <option value="class-6">Class 6</option>
                <option value="class-7">Class 7</option>
                <option value="class-8">Class 8</option>
                <option value="class-9">Class 9</option>
                <option value="class-10">Class 10</option>
              </select>
            </div>
            <div class="col">
              <label for="section">Section </label>
              <select name="section" className="form-control">
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="firstName">First Name *</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="lastName">Last Name *</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="gender">Gender *</label>
              <select name="gender" className="form-control" required>
                <option value="">Gender</option>
                <option value="teacher">Male</option>
                <option value="other">Female</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="lastName">Date of birth *</label>
              <input type="date" name="dob" className="form-control" required />
            </div>
          </div>
          <div class="row my-3">
            <div class="col">
              <label for="firstName">Religion *</label>
              <input
                type="text"
                name="religion"
                className="form-control"
                placeholder="Religion"
                required
              />
            </div>
            <div class="col">
              <label for="lastName">Mobile Number *</label>
              <input
                type="phone"
                name="phone"
                className="form-control"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div class="col">
              <label for="email">E-mail</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div class="col">
              <label for="lastName">Admission Data *</label>
              <input
                type="date"
                name="admissionDate"
                className="form-control"
                required
              />
            </div>
            <div class="col">
              <label for="StudentImage">Student Image *</label>
              <input
                type="file"
                name="StudentImage"
                className="form-control"
                required
              />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="gender">Blood Group</label>
              <select name="gender" className="form-control" required>
                <option value="">Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div class="col">
              <label for="address">Address *</label>
              <textarea
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                required
              ></textarea>
            </div>
            <div class="col">
              <label for="height">Height</label>
              <input
                type="text"
                name="height"
                className="form-control"
                placeholder="Height"
              />
            </div>
          </div>

          <h5 className="my-4">Parent Guardian Detail</h5>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="fatherName">Father Name *</label>
              <input
                type="text"
                name="fatherName"
                className="form-control"
                placeholder="Father Name"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fatherPhone">Father Phone *</label>
              <input
                type="text"
                name="fatherPhone"
                className="form-control"
                placeholder="Father Phone"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="fatherOccupation">Father Occupation *</label>
              <input
                type="text"
                name="fatherOccupation"
                className="form-control"
                placeholder="Father Occupation"
                required
              />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-3">
              <label for="motherName">Mother Name *</label>
              <input
                type="text"
                name="motherName"
                className="form-control"
                placeholder="Mother Name"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="motherPhone">Mother Phone </label>
              <input
                type="text"
                name="motherPhone"
                className="form-control"
                placeholder="Mother Phone"
              />
            </div>
            <div class="col-md-4">
              <label for="motherOccupation">Mother Occupation </label>
              <input
                type="text"
                name="motherOccupation"
                className="form-control"
                placeholder="Mother Occupation"
                required
              />
            </div>
          </div>
          <input
            type="submit"
            value="Save Info"
            className="btn btn-outline-success my-3"
          />
        </form>
      </div>
    </>
  );
}
