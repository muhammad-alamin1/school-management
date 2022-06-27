import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function TeachersInformation() {
  const [teachers, setTeachers] = useState([]);
  const [modelData, setModelData] = useState({});

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");

  // get all teacher data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/teacher/all-teacher")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setTeachers(response.data.data);
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

  // handle full info
  const getHandleInfo = (email) => {
    const data = teachers.filter((user) => user.email === email);
    setModelData(data[0]);
  };

  // delete teacher
  const deleteTeacher = async (email) => {
    try {
      axiosInstance
        .delete(`/teacher/delete/${email}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Teacher deleted successfully.!");
            setError("");
          } else {
            setError("Teacher deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Teacher deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      console.log(error);
      setError("Teacher deleted failed.! There was an server side error.!");
      setSuccess("");
    }
  };

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: teachers.filter((item) => item.first_name.includes(search)),
  };
  return (
    <div id="teacher-info">
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Teachers Information</h3>
        <div className="row my-5" id="onlineAdmissionInformation">
          <div className="col-md-6">
            <label for="class">Search by teacher name</label>
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
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">Subject</th>
              <th scope="col">Salary (TK)</th>
              <th scope="col">Avatar</th>
              <th scope="col" className="bg-info">
                Details
              </th>
              <th scope="col" className="bg-success">
                Update
              </th>
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
            {teachers &&
              data.nodes.map((teacher, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{teacher.first_name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.salary} </td>
                  <td>
                    <a
                      href={`http://localhost:8000/uploads/${teacher.avatar}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`http://localhost:8000/uploads/${teacher.avatar}`}
                        id="teacher-avatar"
                        alt={`${teacher.first_name}`}
                      />
                    </a>
                  </td>

                  <td>
                    <Link
                      to=""
                      onClick={() => getHandleInfo(teacher.email)}
                      className="text-info"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <span className="material-icons-outlined"> info </span>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/admin/teacher/update/${teacher.email}`}
                      className="text-success"
                    >
                      <span className="material-icons-outlined"> edit </span>
                    </Link>
                  </td>
                  <td>
                    <a
                      href=""
                      onClick={() => deleteTeacher(teacher.email)}
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
      {/* information modal */}
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
                {`${modelData?.first_name} ${modelData?.last_name}`}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={`http://localhost:8000/uploads/${modelData?.avatar}`}
                      id="teacher-modal-avatar"
                      alt={modelData?.first_name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6>
                        E-mail: <strong>{modelData?.email}</strong>
                      </h6>
                      <h6>
                        Phone: <strong>{modelData?.phone}</strong>
                      </h6>
                      <h6>
                        Address: <strong>{modelData?.address}</strong>
                      </h6>
                      <h6>
                        Religion: <strong>{modelData?.religion}</strong>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <h6>
                Position: <strong>{modelData?.subject} Teacher</strong>
              </h6>
              <h6>
                Degree: <strong>{modelData?.degree}</strong>
              </h6>
              <h6>
                Institute: <strong>{modelData?.institution}</strong>
              </h6>
              <h6>
                CGPA: <strong>{modelData?.cgpa}</strong>
              </h6>
              <h6>
                DOB: <strong>{modelData?.dob}</strong>
              </h6>
              <h6>
                Join Date: <strong>{modelData?.join_date}</strong>
              </h6>
              <h6>
                Salary: <strong>{modelData?.salary} Tk</strong>
              </h6>
            </div>
            <div className="modal-footer">
              <div className="social-links" id="modal-social-links">
                <ul>
                  <li>
                    <a href="">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="contactIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className="contactIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="contactIcon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        className="contactIcon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
