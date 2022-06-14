import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function TopStudentInfo() {
  const [students, setStudents] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get all student data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/top-student/all-top-student-data/")
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

  // delete student
  const deleteStudent = async (id) => {
    console.log(id);
    try {
      axiosInstance
        .delete(`/top-student/delete/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Student deleted successfully.!");
            setError("");
          } else {
            setError("Student deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Student deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      console.log(error);
      setError("Student deleted failed.! There was an server side error.!");
      setSuccess("");
    }
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Top Student Information</h3>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Registration ID</th>
              <th scope="col">Roll No.</th>
              <th scope="col">Board</th>
              <th scope="col">Exam </th>
              <th scope="col">Year</th>
              <th scope="col">CGPA</th>
              <th scope="col">Avatar</th>
              <th scope="col">Create At</th>
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
            {students &&
              students.map((student, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{student.full_name}</td>
                  <td>{student.registration_id}</td>
                  <td>{student.roll_no}</td>
                  <td>{student.board}</td>
                  <td>{student.exam} </td>
                  <td>{student.exam_year} </td>
                  <td>{student.cgpa} </td>
                  <td>
                    <a
                      href={`http://localhost:8000/uploads/${student.avatar}`}
                      target="_blank"
                    >
                      <img
                        src={`http://localhost:8000/uploads/${student.avatar}`}
                        id="teacher-avatar"
                        alt={`${student.full_name}`}
                      />
                    </a>
                  </td>
                  <td>
                    <td>
                      {new Date(student.createdAt).toLocaleDateString("en-US")}{" "}
                    </td>
                  </td>
                  <td>
                    <a
                      href=""
                      onClick={() => deleteStudent(student._id)}
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
