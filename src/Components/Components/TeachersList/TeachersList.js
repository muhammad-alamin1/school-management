import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import demo from "../../../images/background.webp";

export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);

  // get data
  useEffect(() => {
    axiosInstance
      .get("/teacher/all-teacher")
      .then((response) => {
        // console.log(response.data.data);
        setTeachers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <h2 className="my-4" style={{ fontSize: "3rem" }}>
        Our Teachers
      </h2>
      <div class="row row-cols-1 row-cols-md-3 g-4 my-3">
        <div class="col">
          <div class="card">
            <img src={demo} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={demo} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-3 my-3">
        {teachers &&
          teachers.map((teacher, index) => (
            <div className="col">
              <div className="card" style={{ height: "600px" }}>
                <img
                  src={`http://localhost:8000/uploads/${teacher.avatar}`}
                  className="card-img-top teacher-card-img"
                  alt={teacher.first_name}
                />
                <div className="card-body">
                  <h5 className="card-title my-3">{`${teacher.first_name} ${teacher.last_name}`}</h5>
                  <h6>
                    Position: <strong>{teacher.subject} Teacher</strong>
                  </h6>
                  <h6>
                    Degree: <strong>{teacher.degree} </strong>
                  </h6>
                  <h6>
                    Institute: <strong>{teacher.institution} </strong>
                  </h6>
                </div>
                <div className="card-footer">
                  <h5 className="my-3">Contact Info</h5>
                  <p>
                    E-mail: <strong>{teacher.email} </strong>
                  </p>
                  <p>
                    Phone: <strong>{teacher.phone} </strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
