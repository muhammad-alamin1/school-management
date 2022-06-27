import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function ProfileInformation() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");

  // get all profile data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/user/all-profile-data")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setProfiles(response.data.data);
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

  // delete profile
  const deleteProfile = async (email) => {
    try {
      axiosInstance
        .delete(`/user/delete/profile/${email}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Profile deleted successfully.!");
            setError("");
          } else {
            setError("Profile deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Profile deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      setError("Profile deleted failed.! There was an server side error.!");
      setSuccess("");
    }
  };

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: profiles.filter((item) => item.email.includes(search)),
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Register User Profile Information</h3>
        <div className="row my-5" id="onlineAdmissionInformation">
          <div className="col-md-6">
            <label for="class">Search by email</label>
            <input
              type="search"
              onChange={handleSearch}
              className="form-control"
              placeholder="Search"
            />
            <div className="text-end">
              <button type="btn" className="my-2" id="searchBtn">
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ marginRight: "7px" }}
                />
                Search
              </button>
            </div>
          </div>
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Class</th>
              <th scope="col">Section</th>
              <th scope="col">Roll</th>
              <th scope="col">Gender</th>
              <th scope="col">Religion</th>
              <th scope="col">DOB</th>
              <th scope="col">Current Address</th>
              <th scope="col">Permanent Address</th>
              <th scope="col">Father Name</th>
              <th scope="col">Father Phone</th>
              <th scope="col">Father Occupation</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Avatar</th>

              <th scope="col" className="bg-danger">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
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
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {profiles &&
              data.nodes.map((profile, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{profile.full_name}</td>
                  <td>{profile.email}</td>
                  <td>{profile.phone}</td>
                  <td>{profile.user_class}</td>
                  <td>{profile.section}</td>
                  <td>{profile.roll}</td>
                  <td>{profile.gender}</td>
                  <td>{profile.religion}</td>
                  <td>{profile.dob}</td>
                  <td>{profile.current_address}</td>
                  <td>{profile.permanent_address}</td>
                  <td>{profile.father_name}</td>
                  <td>{profile.father_phone}</td>
                  <td>{profile.father_occupation}</td>
                  <td>
                    {new Date(profile.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    {new Date(profile.updatedAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    <a
                      href={`http://localhost:8000/uploads/${profile.avatar}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`http://localhost:8000/uploads/${profile.avatar}`}
                        id="teacher-avatar"
                        alt={`${profile._id}`}
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href=""
                      onClick={() => deleteProfile(profile.email)}
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
