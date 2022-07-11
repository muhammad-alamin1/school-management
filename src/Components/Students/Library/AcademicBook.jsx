import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function AcademicBook() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  // get all academics books
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/book/all-books")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const filterData = response.data.data.filter((book) => {
            return book.category === "Academic";
          });
          if (filterData) {
            setBooks(filterData);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="py-4">Academic Books</h2>
        <div>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book Name</th>
                <th scope="col">Code</th>
                <th scope="col">Class</th>
                <th scope="col">Category</th>
                <th scope="col" className="text-center bg-secondary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{book.book_name}</td>
                  <td>{book.book_code}</td>
                  <td>{book.user_class}</td>
                  <td>{book.category}</td>
                  <td>
                    <a
                      href={`http://localhost:8000/uploads/pdf/${book.bookFile}`}
                      target="_blank"
                      className="btn btn-outline-success text-white me-2 p-2"
                      type="button"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ marginRight: "7px" }}
                      />
                      View
                    </a>
                    <a
                      href={`http://localhost:8000/uploads/pdf/${book.bookFile}`}
                      target="_blank"
                      className="btn btn-outline-success text-white "
                      type="button"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faDownload}
                        style={{ marginRight: "7px" }}
                      />
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
