import React from "react";
import "./notification.css";

export default function Notification() {
  return (
    <div id="notification">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-side">
            <h2 className="my-4">Events</h2>
            <div className="d-flex">
              <div className="date">
                May <br /> 06
              </div>
              <div>
                <h4>US Senior final exam</h4>
                <p>7:30 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="date">
                May <br /> 06
              </div>
              <div>
                <h4>US Senior final exam</h4>
                <p>7:30 AM - 5:00 PM</p>
              </div>
            </div>
            <button>View All Events</button>
          </div>
          <div className="col-md-6">
            <h2 className="my-4">Notice Board</h2>
            <h4>JSC final exam</h4>
            <small className="my-5">May 06, 2022</small>
            <p>
              The First Academy admits students of any race, color, national and
              ethnic origin to all the rights, privileges, programs, and
              activities generally accorded or made available to students at the
              school. It does not discriminate on the basis of race, color,
              national and ethnic origin in administration of its educational
              policies, admissions policies, scholarship and loan programs, and
              athletic and other school-administered programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
