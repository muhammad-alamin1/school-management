import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";
import "./exam.css";

export default function ExamSchedule() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  // download file
  const downloadExamSchedule = (fileName) => {
    saveAs(`http://localhost:8000/uploads/pdf/${fileName}`, "Exam.pdf");
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Exam Schedule</h3>
        <div>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Exam</th>
                <th scope="col" className="bg-info">
                  View
                </th>
                <th scope="col" className="bg-success">
                  Download
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
                      <button
                        // href={`http://localhost:8000/uploads/pdf/${exam.file}`}
                        // download
                        onClick={() => downloadExamSchedule(exam.file)}
                        className="direction"
                      >
                        <span className="material-icons-outlined">
                          download
                        </span>
                        Download
                      </button>
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
