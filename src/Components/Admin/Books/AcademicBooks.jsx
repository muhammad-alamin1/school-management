import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function AcademicBooks() {
  const [books, setBooks] = useState([]);
  const [error1, setError1] = useState();
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
          } else {
            setError1("Data not found.!");
          }
        } else {
          setError1("Data not found.!");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError1("Data not found.!");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">Academic Books List</h2>
        <div>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
                <th scope="col">Class</th>
                <th scope="col">Category</th>
                <th scope="col">CreateAt</th>
                <th scope="col" className="text-center bg-secondary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {error1 && (
                <div class="alert alert-danger alert-dismissible fade show">
                  <strong>Error!</strong> {error1}
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                  ></button>
                </div>
              )}
              {books.map((book, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{book.book_name}</td>
                  <td>{book.book_code ? book.book_code : `Empty`}</td>
                  <td>{book.user_class ? book.user_class : `Empty`}</td>
                  <td>{book.category}</td>
                  <td>
                    {new Date(book.createdAt).toLocaleDateString("en-US")}
                  </td>
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
