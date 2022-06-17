import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function ClassTimeTable10() {
  const [classRouting, setClassRouting] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get all routing data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/class-time-table/all-time-table")
      .then((response) => {
        // console.log(response.data.data);
        if (response.status === 200 || response.status === 201) {
          const filterData = response.data.data.filter((cls) => {
            return cls.user_class === "Class-10";
          });

          if (filterData) {
            setClassRouting(filterData[0]);
          } else {
            setError("Data not found.!");
          }
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

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Class TimeTable (Class-10)</h3>
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
          {!error ? (
            <embed
              src={`http://localhost:8000/uploads/pdf/${classRouting.file}`}
              type="application/pdf"
              style={{ width: "94%", height: "530px" }}
            />
          ) : (
            <div class="alert alert-danger alert-dismissible fade show">
              <strong>Error!</strong> {error}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
              ></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
