import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function EmployeeInfo() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState("");

  // get notice data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/employee/all-employee/")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setEmployees(response.data.data);
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

  // single employee data
  const singleEmployeeData = (id) => {};

  // delete employee
  const deleteUser = async (id) => {
    try {
      axiosInstance.delete(`/employee/delete/${id}`).then((response) => {
        if (response.status === 200 || response.status === 201) {
          window.location.reload();
        }
      });
    } catch (error) {}
  };

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: employees.filter((item) => item.name.includes(search)),
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">Employee Information</h2>
        <div className="row my-5" id="onlineAdmissionInformation">
          <div className="col-md-6">
            <label for="class">Search by name</label>
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
        <div>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Position</th>
                <th scope="col">Salary</th>
                <th scope="col">Join Date</th>
                <th scope="col">Avatar</th>
                <th scope="col">ID Card</th>
                <th scope="col">CreateAt</th>
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
              {data.nodes.map((employee, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{`${employee.name}`}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.position}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.joinDate}</td>
                  <td>
                    <a
                      href={`http://localhost:8000/uploads/${employee.avatar}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`http://localhost:8000/uploads/${employee.avatar}`}
                        id="teacher-avatar"
                        alt={`${employee.name}`}
                      />
                    </a>
                  </td>
                  <td>
                    <a
                      href={`http://localhost:8000/uploads/${employee.nationalIdCard}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={`http://localhost:8000/uploads/${employee.nationalIdCard}`}
                        id="teacher-avatar"
                        alt={`${employee.name}`}
                      />
                    </a>
                  </td>
                  <td>
                    {new Date(employee.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(employee._id)}
                      type="btn"
                      className="btn btn-outline-danger text-white me-2 p-2"
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ marginRight: "7px" }}
                      />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
