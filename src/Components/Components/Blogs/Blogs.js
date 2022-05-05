import React from "react";
import demo from "../../../images/background.webp";
import "./blogs.css";

export default function Blogs() {
  return (
    <div className="container" id="blogs">
      <h2>Our Blogs</h2>
      <div className="row">
        <div className="col-md-8">
          <img src={demo} alt="blog background" />
          <span>May 05, 2022 | BRUASS</span>
          <h3>Upper School teachers and leadership</h3>
          <p>
            Upper School teachers and leadership are always looking for ways to
            further the mission of Wisdom Beyond Scholarship, and several new
            courses for 2022-2023 will do just that. Beginning in 2022-2023,
            Upper School students will have the opportunity to take Principles
            of Entrepreneurship I II in 9th-12th-grade, where they will design
            and launch a small business. Students will be given the resources to
            understand the basics of product.
          </p>
          <button>
            <a href="">Learn More</a>
          </button>
          <div className="pagination">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-md-4 border-dark">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="">
                  <span>May 05, 2022 | BRUASS</span>
                  <h4 className="text-dark">
                    Upper School teachers and leadership
                  </h4>
                </a>
              </li>
              <li className="list-group-item">
                <a href="">
                  <span>May 05, 2022 | BRUASS</span>
                  <h4 className="text-dark">
                    Upper School teachers and leadership
                  </h4>
                </a>
              </li>
              <li className="list-group-item">
                <a href="">
                  <span>May 05, 2022 | BRUASS</span>
                  <h4 className="text-dark">
                    Upper School teachers and leadership
                  </h4>
                </a>
              </li>
              <li className="list-group-item">
                <a href="">
                  <span>May 05, 2022 | BRUASS</span>
                  <h4 className="text-dark">
                    Upper School teachers and leadership
                  </h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
