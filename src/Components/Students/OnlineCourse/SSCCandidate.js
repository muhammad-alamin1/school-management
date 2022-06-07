import React from "react";
import { Link } from "react-router-dom";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

const subjects = [
  {
    _id: 1,
    name: "Math",
    url: "/dashboard/user/online-course/ssc-candidate/mathematics",
  },
  {
    _id: 2,
    name: "Physics",
    url: "/dashboard/user/online-course/ssc-candidate/physics",
  },
  {
    _id: 3,
    name: "Chemistry",
    url: "/dashboard/user/online-course/ssc-candidate/chemistry",
  },
  {
    _id: 4,
    name: "Higher Math",
    url: "/dashboard/user/online-course/ssc-candidate/higher-math",
  },
  {
    _id: 5,
    name: "Biology",
    url: "/dashboard/user/online-course/ssc-candidate/biology",
  },
  {
    _id: 6,
    name: "ICT",
    url: "/dashboard/user/online-course/ssc-candidate/ict",
  },
  {
    _id: 7,
    name: "Accounting",
    url: "/dashboard/user/online-course/ssc-candidate/accounting",
  },
  {
    _id: 8,
    name: "Finance & Banking",
    url: "/dashboard/user/online-course/ssc-candidate/finance-&-banking",
  },
];

export default function SSCCandidate() {
  return (
    <div>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">SSC Candidate Online Course & Resource</h3>
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
