import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { default as React, useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function ExamScheduleInformation() {
  const [exams, setExams] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get all student data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/exam-schedule/get-all-exam-schedule/")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setExams(response.data.data);
          console.log(response.data.data);
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

  // delete exam schedule
  const deleteSchedule = async (id) => {
    try {
      await axiosInstance
        .delete(`/exam-schedule/delete/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Exam Schedule deleted successfully.!");
            setError("");
          } else {
            setError("Exam Schedule deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Exam Schedule deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      setError(
        "Exam Schedule deleted failed.! There was an server side error.!"
      );
      setSuccess("");
    }
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Exam Schedule Information</h3>
        <div>
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
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exam</th>
                <th scope="col">Create At</th>
                <th scope="col" className="bg-info">
                  View
                </th>
                <th scope="col" className="bg-danger">
                  Delete
                </th>
              </tr>
            </thead>
            {exams &&
              exams.map((exam, index) => (
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{exam.title}</td>
                    <td>
                      {new Date(exam.createdAt).toLocaleDateString("en-US")}
                    </td>
                    <td>
                      <a
                        href={`http://localhost:8000/uploads/pdf/${exam.file}`}
                        target="_blank"
                        className="direction"
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ marginRight: "4px" }}
                        />
                        View
                      </a>
                    </td>
                    <td>
                      <a
                        onClick={() => deleteSchedule(exam._id)}
                        className="direction"
                        href=""
                      >
                        <span className="material-icons-outlined">delete</span>
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </>
  );
}
