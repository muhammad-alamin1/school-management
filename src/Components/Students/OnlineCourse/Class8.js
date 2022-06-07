import React from "react";
import { Link } from "react-router-dom";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

const subjects = [
  {
    _id: 1,
    name: "English 1st",
    url: "/dashboard/user/online-course/class-8/english-first-paper/",
  },
  {
    _id: 2,
    name: "Eng. Grammar",
    url: "/dashboard/user/online-course/class-8/english-grammar/",
  },
  {
    _id: 3,
    name: "Mathematics",
    url: "/dashboard/user/online-course/class-8/mathematics/",
  },
  {
    _id: 4,
    name: "Science",
    url: "/dashboard/user/online-course/class-8/science/",
  },
  {
    _id: 5,
    name: "Spoken English",
    url: "/dashboard/user/online-course/class-8/spoken-english/",
  },
  {
    _id: 6,
    name: "ICT",
    url: "/dashboard/user/online-course/class-8/ict/",
  },
];

export default function Class8() {
  return (
    <div>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Class 8 Online Course & Resource</h3>

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
