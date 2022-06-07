import React from "react";
import { Link } from "react-router-dom";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";
import "./onlineCourse.css";

const subjects = [
  {
    _id: 1,
    name: "Bangla",
    url: "/dashboard/user/online-course/class-6/bangla",
  },
  {
    _id: 2,
    name: "English 1st",
    url: "/dashboard/user/online-course/class-6/english",
  },
  {
    _id: 3,
    name: "Mathematics",
    url: "/dashboard/user/online-course/class-6/mathematics",
  },
  {
    _id: 4,
    name: "Science",
    url: "/dashboard/user/online-course/class-6/science",
  },
  {
    _id: 5,
    name: "English Grammar",
    url: "/dashboard/user/online-course/class-6/english-grammar/",
  },
  {
    _id: 6,
    name: "Spoken English",
    url: "/dashboard/user/online-course/class-6/spoken-english",
  },
  {
    _id: 7,
    name: "ICT",
    url: "/dashboard/user/online-course/class-6/ict/",
  },
];

export default function Class6() {
  return (
    <div>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Class 6 Online Course & Resource</h3>

        <div className="row">
          {subjects.map((subject) => (
            <div className="col-md-3">
              <Link to={`${subject.url}`} id="class-card" className="text-dark">
                {subject.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
