import axios from "axios";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import "./onlineAdmission.css";

export default function OnlineAdmission() {
  const [studentClass, setStudentClass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianOccupation, setGuardianOccupation] = useState("");
  const [guardianAddress, setGuardianAddress] = useState("");
  const [nationalIdCardNumber, setNationalIdCardNumber] = useState("");
  const [prevSchoolDetails, setPrevSchoolDetails] = useState("");
  const [studentAvatar, setStudentAvatar] = useState(null);
  const [guardianAvatar, setGuardianAvatar] = useState(null);

  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  // file change
  const handleFileSelect = (event) => {
    if (event.target.name === "studentAvatar") {
      setStudentAvatar(event.target.files[0]);
    }
    if (event.target.name === "guardianAvatar") {
      setGuardianAvatar(event.target.files[0]);
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // data
    const formData = new FormData();

    formData.append("studentClass", studentClass);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("religion", religion);
    formData.append("studentPhone", studentPhone);
    formData.append("studentEmail", studentEmail);
    formData.append("guardianName", guardianName);
    formData.append("guardianRelation", guardianRelation);
    formData.append("guardianPhone", guardianPhone);
    formData.append("guardianEmail", guardianEmail);
    formData.append("guardianOccupation", guardianOccupation);
    formData.append("guardianAddress", guardianAddress);
    formData.append("nationalIdCardNumber", nationalIdCardNumber);
    formData.append("prevSchoolDetails", prevSchoolDetails);
    formData.append("studentAvatar", studentAvatar);
    formData.append("guardianAvatar", guardianAvatar);

    // axios post req
    axios
      .post(`http://localhost:8000/online-admission/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
          setErrors("");

          // when form submit success then form is empty
          setStudentClass("");
          setFirstName("");
          setLastName("");
          setDob("");
          setGender("");
          setStudentPhone("");
          setReligion("");
          setGuardianName("");
          setGuardianRelation("");
          setNationalIdCardNumber("");
          setPrevSchoolDetails("");
          setGuardianOccupation("");
          setGuardianAddress("");
          setGuardianPhone("");
          setStudentEmail("");
          setGuardianEmail("");
          setGuardianAvatar(null);
          setStudentAvatar(null);
        } else {
          setSuccess("");
          setError("Admission Failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Admission Failed.!");
        setLoading(false);
      });
  };
  return (
    <>
      <Nav />
      <div className="container" id="onlineAdmission">
        <h2 className="my-5">Online Admission</h2>

        <div class="card my-4">
          <h6 class="card-header">Instructions</h6>
          <div class="card-body">
            <p class="card-text">
              Please enter your institution online admission instructions here.
            </p>
          </div>
        </div>

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
          multiple="multiple"
        >
          <div className="card my-4">
            <h6 className="card-header">Basic Details</h6>
            <div className="card-body">
              <div className="row my-4">
                <div class="col">
                  <label for="studentClass">Class *</label>
                  <select
                    name="studentClass"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="" disabled>
                      Select Class
                    </option>
                    <option value="Class-6">Class 6</option>
                    <option value="Class-7">Class 7</option>
                    <option value="Class-8">Class 8</option>
                    <option value="Class-9">Class 9</option>
                    <option value="Class-10">Class 10</option>
                  </select>
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.studentClass && errors?.studentClass.msg}
                    </div>
                  )}
                </div>
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
                    <option value="Other">Other</option>
                  </select>
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.gender && errors?.gender.msg}
                    </div>
                  )}
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-3">
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
                  <label for="religion">Religion *</label>
                  <input
                    type="text"
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
                <div class="col">
                  <label for="studentPhone">Mobile Number *</label>
                  <input
                    type="phone"
                    name="studentPhone"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    className="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.studentPhone && errors?.studentPhone.msg}
                    </div>
                  )}
                </div>
                <div class="col">
                  <label for="studentEmail">E-mail</label>
                  <input
                    type="email"
                    name="studentEmail"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="row my-4">
                <div class="col-md-4">
                  <label for="studentAvatar">Student Photo *</label>
                  <input
                    type="file"
                    name="studentAvatar"
                    onChange={handleFileSelect}
                    className="form-control"
                    accept="image/*"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.studentAvatar && errors?.studentAvatar.msg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="card my-4">
            <h6 class="card-header">Guardian Details</h6>
            <div class="card-body">
              <div className="row my-4">
                <div className="col-md-3">
                  <label for="guardianName">Guardian Name *</label>
                  <input
                    type="text"
                    name="guardianName"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    className="form-control"
                    placeholder="Guardian Name"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.guardianName && errors?.guardianName.msg}
                    </div>
                  )}
                </div>
                <div class="col">
                  <label for="guardianRelation">Guardian Relation *</label>
                  <select
                    name="guardianRelation"
                    value={guardianRelation}
                    onChange={(e) => setGuardianRelation(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="" disabled>
                      Choose One
                    </option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.guardianRelation && errors?.guardianRelation.msg}
                    </div>
                  )}
                </div>
                <div class="col">
                  <label for="guardianPhone">Guardian Mobile Number *</label>
                  <input
                    type="phone"
                    name="guardianPhone"
                    value={guardianPhone}
                    onChange={(e) => setGuardianPhone(e.target.value)}
                    className="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.guardianPhone && errors?.guardianPhone.msg}
                    </div>
                  )}
                </div>
                <div class="col">
                  <label for="guardianEmail">Guardian E-mail</label>
                  <input
                    type="email"
                    name="guardianEmail"
                    value={guardianEmail}
                    onChange={(e) => setGuardianEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="row my-4">
                <div className="col-md-3">
                  <label for="guardianAvatar">Guardian Photo *</label>
                  <input
                    type="file"
                    name="guardianAvatar"
                    onChange={handleFileSelect}
                    className="form-control"
                    accept="image/*"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.guardianAvatar && errors?.guardianAvatar.msg}
                    </div>
                  )}
                </div>
                <div class="col">
                  <label for="guardianOccupation">Guardian Occupation *</label>
                  <input
                    type="text"
                    name="guardianOccupation"
                    value={guardianOccupation}
                    onChange={(e) => setGuardianOccupation(e.target.value)}
                    className="form-control"
                    placeholder="Guardian Occupation"
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.guardianOccupation &&
                        errors?.guardianOccupation.msg}
                    </div>
                  )}
                </div>
                <div class="col">
                  <label for="guardianAddress">Guardian address *</label>
                  <input
                    type="text"
                    name="guardianAddress"
                    value={guardianAddress}
                    onChange={(e) => setGuardianAddress(e.target.value)}
                    className="form-control"
                    placeholder="Guardian address"
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.guardianAddress && errors?.guardianAddress.msg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="card my-4">
            <h6 class="card-header">Miscellaneous Details</h6>
            <div class="card-body">
              <div className="row my-4">
                <div className="col-md-6">
                  <label for="nationalIdCardNumber">
                    National Identification Number *
                  </label>
                  <input
                    type="number"
                    name="nationalIdCardNumber"
                    value={nationalIdCardNumber}
                    onChange={(e) => setNationalIdCardNumber(e.target.value)}
                    className="form-control"
                    placeholder="National Identification Number"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.nationalIdCardNumber &&
                        errors?.nationalIdCardNumber.msg}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <label for="prevSchoolDetails">
                    Previous School Details *
                  </label>
                  <input
                    type="text"
                    name="prevSchoolDetails"
                    value={prevSchoolDetails}
                    onChange={(e) => setPrevSchoolDetails(e.target.value)}
                    className="form-control"
                    placeholder="Previous School Details"
                    required
                  />
                  {errors && (
                    <div style={{ color: "red" }}>
                      {errors?.prevSchoolDetails &&
                        errors?.prevSchoolDetails.msg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            id="contactUsSubmitBtn"
            className="my-5"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
