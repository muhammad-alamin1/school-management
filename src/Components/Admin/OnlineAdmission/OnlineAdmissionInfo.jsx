import { faCircleCheck, faEye } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";
import "./onlineAdmission.css";

export default function OnlineAdmissionInfo() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");

  // get notice data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/online-admission/all-register-info/")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setStudents(response.data.data);
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

  // update status
  const updateStatus = async (id) => {
    try {
      axiosInstance
        .put(`/online-admission/update-status/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            window.location.reload();
          }
        });
    } catch (error) {}
  };

  // delete user
  const deleteUser = async (id) => {
    try {
      axiosInstance
        .delete(`/online-admission/delete-user/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            window.location.reload();
          }
        });
    } catch (error) {}
  };

  // single student get data
  const singleStudentData = async (id) => {
    try {
      // get notice data
      await axiosInstance
        .get(`/online-admission/single-student/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setStudent(response.data.data);
          }
        })
        .catch((err) => {});
    } catch (error) {}
  };

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: students.filter((item) => item.student_phone.includes(search)),
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">Online Admission Information</h2>
        <div className="row" id="onlineAdmissionInformation">
          <div className="col-md-5">
            <label for="class">Search by Class</label>
            <select name="class" className="form-control">
              <option value="">All</option>
              <option value="Class-6">Class 6</option>
              <option value="Class-7">Class 7</option>
              <option value="Class-8">Class 8</option>
              <option value="Class-9">Class 9</option>
              <option value="Class-10">Class 10</option>
            </select>
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
          <div className="col-md-6">
            <label for="class">Search by student phone number</label>
            <input
              type="text"
              onChange={handleSearch}
              className="form-control"
              placeholder="Search by student phone number"
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
        <div className="my-5" id="onlineAdmissionTableInformation">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Class</th>
                <th scope="col">Phone</th>
                <th scope="col">Guardian Phone</th>
                <th scope="col">CreateAt</th>
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
                <div className="alert alert-danger alert-dismissible fade show my-5">
                  <strong>Error!</strong> {error}
                </div>
              )}
              {loading && (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {data.nodes.map((student, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{`${student.first_name} ${student.last_name}`}</td>
                  <td>{student.student_class}</td>
                  <td>{student.student_phone}</td>
                  <td>{student.guardian_phone}</td>
                  <td>
                    {" "}
                    {new Date(student.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>{student.status}</td>
                  <td>
                    <button
                      onClick={() => updateStatus(student._id)}
                      type="btn"
                      className="btn btn-outline-success text-white me-2 p-2"
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ marginRight: "7px" }}
                      />
                      Approved
                    </button>
                    <button
                      onClick={() => deleteUser(student._id)}
                      type="btn"
                      className="btn btn-outline-danger text-white me-2 p-2"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ marginRight: "7px" }}
                      />
                      Delete
                    </button>
                    <button
                      onClick={() => singleStudentData(student._id)}
                      className="btn btn-outline-success text-white p-2"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
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
        </div>

        {/* model data */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  {`${student.first_name} ${student.last_name}`}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h6 className="mb-4 text-center">General Information</h6>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={`http://localhost:8000/uploads/${student.student_avatar}`}
                      alt="user"
                      width="100"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>Class: </strong>
                          {student.student_class}
                        </p>
                      </div>
                      <div className="col">
                        <strong>Phone: </strong>
                        {student.student_phone}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>Mail: </strong>
                          {student.student_email
                            ? student.student_email
                            : "Empty"}
                        </p>
                      </div>
                      <div className="col">
                        <strong>Nation ID: </strong>
                        {student.national_id_number}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>DOB: </strong>
                          {student.dob}
                        </p>
                      </div>
                      <div className="col">
                        <strong>Religion: </strong>
                        {student.religion}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>SEX: </strong>
                          {student.gender}
                        </p>
                      </div>
                      <div className="col">
                        <p>
                          <strong>Status: </strong>
                          {student.status}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p style={{ wordWrap: "break-word" }}>
                          <strong>Previous School Details: </strong>
                          {student.prev_school_details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="my-4 text-center">Guardian Information</h6>
                <div className="row my-4">
                  <div className="col-md-3">
                    <img
                      src={`http://localhost:8000/uploads/${student.guardian_avatar}`}
                      alt="user"
                      width="100"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>Name: </strong>
                          {student.guardian_name}
                        </p>
                      </div>
                      <div className="col">
                        <strong>Phone: </strong>
                        {student.guardian_phone}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>Mail: </strong>
                          {student.student_email
                            ? student.guardian_email
                            : "Empty"}
                        </p>
                      </div>
                      <div className="col">
                        <strong>Relation: </strong>
                        {student.guardian_relation}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <p>
                          <strong>Occupation: </strong>
                          {student.guardian_occupation}
                        </p>
                      </div>
                      <div className="col">
                        <strong>Address: </strong>
                        {student.guardian_address}
                      </div>
                    </div>
                  </div>
                </div>

                <h6 className="my-4 text-center">Others Information</h6>
                <div className="row my-4">
                  <div className="col-md-3">
                    <p>
                      <strong>CreatedAt: </strong>
                      {new Date(student.createdAt).toLocaleDateString("en-US")}
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      <strong>UpdatedAt: </strong>
                      {new Date(student.updatedAt).toLocaleDateString("en-US")}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <strong>Database ID: </strong>
                      {student._id}
                    </p>
                  </div>
                </div>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
