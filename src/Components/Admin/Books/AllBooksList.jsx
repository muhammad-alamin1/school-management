import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import SearchQuery from "../../Components/Search/SearchQuery";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function AllBooksList() {
  const [books, setBooks] = useState([]);
  const [error1, setError1] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // get all academics books
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/book/all-books")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setBooks(response.data.data);
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

  // delete book
  const deleteBook = async (id) => {
    try {
      axiosInstance.delete(`/book/delete/${id}`).then((response) => {
        if (response.status === 200 || response.status === 201) {
          window.location.reload();
        }
      });
    } catch (error) {}
  };

  // change category
  const changeCategory = async (id) => {
    try {
      axiosInstance.put(`/book/update/${id}`).then((response) => {
        if (response.status === 200 || response.status === 201) {
          window.location.reload();
        }
      });
    } catch (error) {}
  };

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // search filter data
  const data = {
    nodes: books.filter((item) => item.book_name.includes(search)),
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">All Book List Information</h2>
        <SearchQuery handleSearch={handleSearch} searchBy="name" />

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
              {books &&
                data.nodes.map((book, index) => (
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
                      <button
                        onClick={() => deleteBook(book._id)}
                        type="btn"
                        className="btn btn-outline-danger text-white me-2 p-2"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ marginRight: "7px" }}
                        />
                        Delete
                      </button>
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
                      <button
                        onClick={() => changeCategory(book._id)}
                        type="btn"
                        className="btn btn-outline-success text-white me-2 p-2"
                      >
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          style={{ marginRight: "7px" }}
                        />
                        Change Category
                      </button>
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
