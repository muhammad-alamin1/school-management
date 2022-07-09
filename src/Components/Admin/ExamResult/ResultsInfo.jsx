import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import SearchQuery from "../../Components/Search/SearchQuery";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function ResultsInfo() {
  const [exams, setExams] = useState([]);
  const [title, setTitle] = useState("");

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: exams.filter((item) => item.email.includes(search)),
  };

  // get all profile data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/exam-result/all-result")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setExams(response.data.data);
        } else {
          setError("Data not found.!");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Data not found.!");
        setLoading(false);
      });
  }, []);

  // delete exam by exam title
  const deleteExam = async (id) => {
    try {
      axiosInstance.delete(`/exam-result/delete/${id}`).then((response) => {
        if (response.status === 200 || response.status === 201) {
          window.location.reload();
        }
      });
    } catch (error) {}
  };

  // delete exam by user id
  const deleteExamByUserId = async (id) => {
    try {
      axiosInstance
        .delete(`/exam-result/delete-by-user-id/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            window.location.reload();
          }
        });
    } catch (error) {}
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">All Class Results Information</h2>
        <div>
          <SearchQuery handleSearch={handleSearch} searchBy="email" />

          <div className="row">
            <div className="col-md-8">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Exam</th>
                    <th scope="col">Email</th>
                    <th scope="col">Class</th>
                    <th scope="col">Section</th>
                    <th scope="col">Roll</th>
                    <th scope="col">Create At</th>
                    <th scope="col" className="text-center bg-secondary">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {error && (
                    <div class="alert alert-danger alert-dismissible fade show">
                      <strong>Error!</strong> {error}
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                      ></button>
                    </div>
                  )}
                  {loading && (
                    <div class="d-flex justify-content-center">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                  {exams &&
                    data.nodes.map((exam, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{exam.exam_title}</td>
                        <td>{exam.email}</td>
                        <td>{exam.user_class}</td>
                        <td>{exam.section}</td>
                        <td>{exam.roll}</td>
                        <td>
                          {new Date(exam.createdAt).toLocaleDateString("en-US")}
                        </td>
                        <td className="d-flex">
                          <button
                            onClick={() => deleteExamByUserId(exam._id)}
                            type="btn"
                            className="btn btn-outline-danger text-white me-2 p-2 "
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ marginRight: "7px" }}
                            />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Exam</th>
                    <th scope="col" className="text-center bg-secondary">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        required
                      >
                        <option value="" disabled>
                          Chose One
                        </option>
                        <option value="Year Final Examination 2022">
                          Year Final Examination 2022
                        </option>
                        <option value="Mid term Examination 2023">
                          Mid term Examination 2023
                        </option>
                        <option value="Year Final Examination 2023">
                          Year Final Examination 2023
                        </option>
                      </select>
                    </td>
                    <td className="d-flex">
                      <button
                        onClick={() => deleteExam(title)}
                        type="btn"
                        className="btn btn-outline-danger text-white me-2 p-2 "
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ marginRight: "7px" }}
                        />
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
