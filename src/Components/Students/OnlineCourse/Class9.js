import React from "react";
import { Link } from "react-router-dom";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

const subjects = [
  {
    _id: 1,
    name: "English 1st",
    url: "/dashboard/user/online-course/9-10/english-first-paper/",
  },
  {
    _id: 2,
    name: "Eng. Grammar",
    url: "/dashboard/user/online-course/9-10/english-grammar/",
  },
  {
    _id: 3,
    name: "Math",
    url: "/dashboard/user/online-course/9-10/general-math/",
  },
  {
    _id: 4,
    name: "Science",
    url: "/dashboard/user/online-course/9-10/science/",
  },
  {
    _id: 5,
    name: "Spoken English",
    url: "/dashboard/user/online-course/9-10/spoken-english/",
  },
  {
    _id: 6,
    name: "Physics",
    url: "/dashboard/user/online-course/9-10/physics/",
  },
  {
    _id: 7,
    name: "Chemistry",
    url: "/dashboard/user/online-course/9-10/chemistry/",
  },
  {
    _id: 8,
    name: "Higher Math",
    url: "/dashboard/user/online-course/9-10/higher-math/",
  },
  {
    _id: 9,
    name: "Biology",
    url: "/dashboard/user/online-course/9-10/biology/",
  },
  {
    _id: 10,
    name: "ICT",
    url: "/dashboard/user/online-course/9-10/ict/",
  },
  {
    _id: 11,
    name: "Accounting",
    url: "/dashboard/user/online-course/9-10/accounting/",
  },
  {
    _id: 12,
    name: "Finance & Banking",
    url: "/dashboard/user/online-course/9-10/finance-&-banking",
  },
];

export default function Class9() {
  return (
    <div>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Class 9 Online Course & Resource</h3>

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
