import { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function ChangePassword() {
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // handle change
  const handleChange = (event) => {
    const newData = { ...values };
    newData[event.target.name] = event.target.value;
    setValues(newData);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // axios post req
    axiosInstance
      .put(`/auth/user/change-password/`, values)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
          setErrors("");
        } else {
          setSuccess("");
          setError("Password Updated failed.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Password Updated failed.!");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Change Password</h3>
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="password"
                name="oldPassword"
                placeholder="Old Password"
                className="form-control"
                value={values.oldPassword}
                onChange={handleChange}
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.oldPassword && errors?.oldPassword.msg}
                </div>
              )}
            </div>
            <div className="col">
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                className="form-control"
                value={values.newPassword}
                onChange={handleChange}
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.newPassword && errors?.newPassword.msg}
                </div>
              )}
            </div>
            <div className="col">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control"
                value={values.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.confirmPassword && errors?.confirmPassword.msg}
                </div>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Change Password"
            className="btn btn-outline-success my-4"
          />
        </form>
      </div>
    </>
  );
}
