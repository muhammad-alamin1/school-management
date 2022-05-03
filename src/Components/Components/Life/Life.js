import React from "react";
import "./life.css";

export default function Life() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 life-left-img"></div>
        <div className="col-md-6 life-mid">
          <h2>Student Life</h2>
          <h4>
            Student life at The First Academy is a rich and vibrant experience.
          </h4>
          <p>
            Striving to provide a well balanced spiritual, academic and social
            well-being, students are encouraged to both serve and participate in
            and beyond our community. With plenty of room for opportunity,
            students can engage in over forty sports, the arts, and equally many
            student driven clubs.
          </p>
          <div className="text-center">
            <a href="">
              <button>Learn More</button>
            </a>
          </div>
        </div>
        <div className="col-md-3 life-right-img"></div>
      </div>
    </div>
  );
}
