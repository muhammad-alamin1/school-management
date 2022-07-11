import {
  faCircleCheck,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import SearchQuery from "../../Components/Search/SearchQuery";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function ProfileInformation() {
  const [id, setId] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState({});
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
            window.location.reload();
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

  // search filter data
  const data = {
    nodes: profiles.filter((item) => item.email.includes(search)),
  };

  // update status
  const updateStatus = async (id) => {
    try {
      axiosInstance
        .put(`/user/status-update/profile/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            window.location.reload();
          }
        });
    } catch (error) {}
  };

  // modal data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/user/single-user/${id}`)
      .then((response) => {
        // console.log(response);
        if (response.status === 200 || response.status === 201) {
          setProfile(response.data.data);
        } else {
          // setError("Data not found.!");
        }
        setLoading(false);
      })
      .catch((err) => {
        // setError("Data not found.!");
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Register User Profile Information</h3>
        <SearchQuery handleSearch={handleSearch} searchBy="email" />
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Class</th>
              <th scope="col">Section</th>
              <th scope="col">Roll</th>
              <th scope="col" className="bg-info">
                Status
              </th>
              <th scope="col" className="text-center bg-secondary">
                Action
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
                  <td>{profile.user_class}</td>
                  <td>{profile.section}</td>
                  <td>{profile.roll}</td>
                  <td>{profile.status}</td>
                  <td className="d-flex">
                    <button
                      type="btn"
                      onClick={() => updateStatus(profile._id)}
                      className="btn btn-outline-success text-white me-2 p-2 "
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ marginRight: "7px" }}
                      />
                      Approved
                    </button>
                    <button
                      onClick={() => deleteProfile(profile.email)}
                      type="btn"
                      className="btn btn-outline-danger text-white me-2 p-2 "
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ marginRight: "7px" }}
                      />
                      Delete
                    </button>

                    <button
                      type="button"
                      onClick={() => setId(profile.email)}
                      className="btn btn-outline-success text-white p-2 "
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ marginRight: "7px" }}
                      />
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* popup modal */}
        <div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg text-dark">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {profile.full_name}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h6 className="mb-4 text-center">General Information</h6>
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={`http://localhost:8000/uploads/${profile.avatar}`}
                        alt="user"
                        width="100"
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>Class: </strong>
                            {profile.user_class}
                          </p>
                        </div>
                        <div className="col">
                          <strong>Phone: </strong>
                          {profile.phone}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>Mail: </strong>
                            {profile.email ? profile.email : "Empty"}
                          </p>
                        </div>
                        <div className="col">
                          <strong>Nation ID: </strong>
                          {profile.national_id_number}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>DOB: </strong>
                            {profile.dob}
                          </p>
                        </div>
                        <div className="col">
                          <strong>Religion: </strong>
                          {profile.religion}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>SEX: </strong>
                            {profile.gender}
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            <strong>Status: </strong>
                            {profile.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 className="my-4 text-center">Guardian Information</h6>
                  <div className="row my-4">
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>Name: </strong>
                            {profile.father_name}
                          </p>
                        </div>
                        <div className="col">
                          <strong>Phone: </strong>
                          {profile.father_phone}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>Mail: </strong>
                            {profile.guardian_email
                              ? profile.guardian_email
                              : "Empty"}
                          </p>
                        </div>
                        <div className="col">
                          <p>
                            <strong>Occupation: </strong>
                            {profile.father_occupation}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <strong>Address: </strong>
                          {profile.current_address}
                        </div>
                        <div className="col">
                          <p>
                            <strong>Permanent Address: </strong>
                            {profile.permanent_address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 className="my-4 text-center">Others Information</h6>
                  <div className="row my-4">
                    <div className="col-md-3">
                      <p>
                        <strong>CreatedAt: </strong>
                        {new Date(profile.createdAt).toLocaleDateString(
                          "en-US"
                        )}
                      </p>
                    </div>
                    <div className="col-md-3">
                      <p>
                        <strong>UpdatedAt: </strong>
                        {new Date(profile.updatedAt).toLocaleDateString(
                          "en-US"
                        )}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <strong>Database ID: </strong>
                        {profile._id}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
