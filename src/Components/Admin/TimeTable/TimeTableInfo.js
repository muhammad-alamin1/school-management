import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";

export default function TimeTableInfo() {
  const [classRouting, setClassRouting] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get all routing data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/class-time-table/all-time-table")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setClassRouting(response.data.data);
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

  // delete class routing
  const deleteClassSchedule = async (id) => {
    try {
      axiosInstance
        .delete(`/class-time-table/delete/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Class routing deleted successfully.!");
            setError("");
          } else {
            setError("Class routing deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Class routing deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      setError(
        "Class routing deleted failed.! There was an server side error.!"
      );
      setSuccess("");
    }
  };
  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Class</th>
            <th scope="col">Create At</th>
            <th scope="col" className="bg-info">
              View
            </th>
            <th scope="col" className="bg-danger">
              Delete
            </th>
          </tr>
        </thead>
        {classRouting &&
          classRouting.map((routing, index) => (
            <tbody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{routing.user_class}</td>
                <td>
                  {new Date(routing.createdAt).toLocaleDateString("en-US")}
                </td>
                <td>
                  <a
                    href={`http://localhost:8000/uploads/pdf/${routing.file}`}
                    target="_blank"
                    className="direction btn btn-outline-info"
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
                    href=""
                    onClick={() => deleteClassSchedule(routing._id)}
                    className="direction btn btn-outline-danger"
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
  );
}
