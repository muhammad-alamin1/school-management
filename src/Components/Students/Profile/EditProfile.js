import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function EditProfile() {
  const { email } = useParams();

  const [profile, setProfile] = useState({});
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // get single user profile data
  useEffect(() => {
    axiosInstance
      .get(`/user/single-user/${email}`)
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          setProfile(response?.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  // handle change
  const handleChange = (e) => {
    const newData = { ...profile };
    newData[e.target.name] = e.target.value;
    setProfile(newData);
  };

  // file change
  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // data
    const formData = new FormData();

    formData.append("fullName", profile.full_name);
    formData.append("userClass", profile.user_class);
    formData.append("section", profile.section);
    formData.append("roll", profile.roll);
    formData.append("fatherPhone", profile.father_phone);
    formData.append("fatherOccupation", profile.father_occupation);
    formData.append("currentAddress", profile.current_address);
    formData.append("permanentAddress", profile.permanent_address);
    if (file !== null) {
      formData.append("avatar", file);
    } else {
      formData.append("avatar", profile.avatar);
    }

    axiosInstance
      .put(`/user/update/profile/${email}`, formData)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setError("");
          setSuccess(response.data.message);
          // history(-1);
        } else {
          setError("Student updated failed.!");
          setSuccess("");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Student updated failed.!");
        setSuccess("");
        setLoading(false);
      });
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Update Your Information</h3>
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
            <div class="col">
              <label for="full_name">Update Your Name *</label>
              <input
                name="full_name"
                className="form-control"
                value={profile.full_name}
                onChange={handleChange}
                required
              />
            </div>

            <div class="col">
              <label for="userClass">Class *</label>
              <select
                name="user_class"
                value={profile.user_class}
                onChange={handleChange}
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
            </div>
            <div class="col">
              <label for="section">Section *</label>
              <select
                name="section"
                value={profile.section}
                onChange={handleChange}
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
                value={profile.roll}
                onChange={handleChange}
                className="form-control"
                placeholder="Roll No. "
                required
              />
            </div>
          </div>
          <div class="row my-4">
            <div class="col">
              <label for="avatar">Update Your Profile Image *</label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileSelect}
                className="form-control"
                accept="image/*"
              />
            </div>

            <div class="col">
              <label for="fatherPhone">Father Phone *</label>
              <input
                type="phone"
                name="father_phone"
                value={profile.father_phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Phone"
                required
              />
            </div>

            <div class="col">
              <label for="fatherOccupation">Father Occupation *</label>
              <input
                type="text"
                name="father_occupation"
                value={profile.father_occupation}
                onChange={handleChange}
                className="form-control"
                placeholder="Father Occupation"
                required
              />
            </div>
          </div>
          <div className="row my-4">
            <div class="col">
              <label for="currentAddress">Current Address *</label>
              <textarea
                name="current_address"
                className="form-control"
                placeholder="Current address"
                value={profile.current_address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div class="col">
              <label for="permanentAddress">Permanent Address *</label>
              <textarea
                name="permanent_address"
                className="form-control"
                placeholder="Permanent address"
                value={profile.permanent_address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Update Information"
            className="btn btn-outline-success"
          />
        </form>
      </div>
    </>
  );
}
