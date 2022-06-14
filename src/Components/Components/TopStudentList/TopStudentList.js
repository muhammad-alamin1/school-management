import axios from "axios";
import React, { useEffect, useState } from "react";
import noPhoto from "../../../images/nophoto.png";

export default function TopStudentList() {
  const [students, setStudents] = useState([]);

  // get data
  useEffect(() => {
    axios
      .get("http://localhost:8000/top-student/all-top-student-data/")
      .then((response) => {
        console.log(response.data.data);
        setStudents(response?.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <h2 className="my-4" style={{ fontSize: "3rem" }}>
        Our Students
      </h2>
      <div className="row row-cols-1 row-cols-md-4 g-3 my-4 ">
        {students.map((student) => (
          <div class="student-profile p-2">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                {student && student.avatar ? (
                  <img
                    className="profile_img img-responsive img-rounded"
                    src={`http://localhost:8000/uploads/${student.avatar}`}
                    alt="User picture"
                  />
                ) : (
                  <img
                    className="profile_img img-responsive img-rounded"
                    src={noPhoto}
                    alt="User picture"
                  />
                )}
                {student ? (
                  <h3>{student.full_name}</h3>
                ) : (
                  <h3>{`${student.full_name}`}</h3>
                )}
              </div>
              <div className="card-body">
                <p className="mb-1 my-2">
                  <strong className="pr-1">CGPA: </strong>
                  {student ? `${student.cgpa}` : "Empty"}
                </p>
                <p className="mb-1">
                  <strong className="pr-1 my-2">Registration ID: </strong>
                  {student ? `${student.registration_id}` : "Empty"}
                </p>
                <p class="mb-1">
                  <strong className="pr-1 my-2">Roll No.: </strong>
                  {student ? `${student.roll_no}` : "Empty"}
                </p>
                <p class="mb-1">
                  <strong className="pr-1 my-2">Batch: </strong>
                  {student ? `${student.exam} (${student.exam_year})` : "Empty"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
