import { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";
import "./employee.css";

export default function AddEmployee() {
  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [cardAvatar, setCardAvatar] = useState(null);
  const [joinDate, setJoinDate] = useState("");
  const [address, setAddress] = useState("");

  console.log(joinDate);

  // file change
  const handleFileSelect = (event) => {
    if (event.target.name === "avatar") {
      setAvatar(event.target.files[0]);
    }
    if (event.target.name === "nationalIDCard") {
      setCardAvatar(event.target.files[0]);
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // data
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("salary", salary);
    formData.append("avatar", avatar);
    formData.append("joinDate", joinDate);
    formData.append("nationalIDCard", cardAvatar);
    formData.append("address", address);

    // axios post req
    axiosInstance
      .post(`/employee/register/`, formData, {
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
          setError("Employee added failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Employee added failed.!");
        setLoading(false);
      });
  };

  return (
    <div className="">
      <DashboardPanel />
      <div className="sidebar-margin" id="employee">
        <h2 className="my-4">Register Employee</h2>

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
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control common-filed"
                placeholder="Name"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.name && errors?.name.msg}
                </div>
              )}
            </div>
            <div className="col">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control common-filed"
                placeholder="Email"
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.email && errors?.email.msg}
                </div>
              )}
            </div>
            <div className="col">
              <label htmlFor="phone">Phone *</label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control common-filed"
                placeholder="Phone"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.phone && errors?.phone.msg}
                </div>
              )}
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <label htmlFor="position">Position *</label>
              <input
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="form-control common-filed"
                placeholder="Position"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.position && errors?.position.msg}
                </div>
              )}
            </div>
            <div className="col">
              <label htmlFor="salary">Salary *</label>
              <input
                type="number"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="form-control common-filed"
                placeholder="Salary"
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.salary && errors?.salary.msg}
                </div>
              )}
            </div>
            <div className="col">
              <label htmlFor="phone">Avatar *</label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileSelect}
                className="form-control common-filed"
                accept="image/*"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.avatar && errors?.avatar.msg}
                </div>
              )}
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <label htmlFor="joinDate">Join Date *</label>
              <input
                type="date"
                name="joinDate"
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
                className="form-control common-filed"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.joinDate && errors?.joinDate.msg}
                </div>
              )}
            </div>
            <div className="col">
              <label htmlFor="nationalIDCard">National ID Card *</label>
              <input
                type="file"
                name="nationalIDCard"
                onChange={handleFileSelect}
                className="form-control common-filed"
                accept="image/*"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.nationalIDCard && errors?.nationalIDCard.msg}
                </div>
              )}
            </div>
            <div className="col">
              <label htmlFor="phone">Address *</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control common-filed"
                placeholder="Address"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.address && errors?.address.msg}
                </div>
              )}
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
    </div>
  );
}
