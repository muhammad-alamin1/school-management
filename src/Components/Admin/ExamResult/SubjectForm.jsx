import { useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import "./examResult.css";

export default function SubjectForm({ usr }) {
  const { email, cls, roll, section } = usr;

  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [banglaFirst, setBanglaFirst] = useState("");
  const [banglaSecond, setBanglaSecond] = useState("");
  const [englishFirst, setEnglishFirst] = useState("");
  const [englishSecond, setEnglishSecond] = useState("");
  const [mathematics, setMathematics] = useState("");
  const [ict, setIct] = useState("");
  const [cgpa, setCgpa] = useState("");

  // data
  const usrData = {
    email,
    userClass: cls,
    section,
    roll,
    title,
    banglaFirst,
    banglaSecond,
    englishFirst,
    englishSecond,
    mathematics,
    ict,
    cgpa,
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // axios post req
    axiosInstance({
      method: "post",
      url: `/exam-result/send-result`,
      data: usrData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
        } else {
          setSuccess("");
          setError("Failed to send exam result.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setError("Failed to send exam result.!");
        setLoading(false);
      });
  };

  return (
    <div id="exam-result">
      {success && (
        <div class="alert alert-success alert-dismissible fade show">
          <strong>Success!</strong> {success}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      )}
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
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title">Exam Title</label>
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
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="class">Class</label>
            <input
              type="text"
              name="class"
              defaultValue={cls}
              placeholder="Class"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="section">Section</label>
            <input
              type="text"
              name="section"
              defaultValue={section}
              placeholder="Section"
              className="form-control"
            />
          </div>
          <div className="col">
            <label htmlFor="roll">Roll</label>
            <input
              type="text"
              name="roll"
              defaultValue={roll}
              placeholder="Roll"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <label htmlFor="banglaFirst">Bangla First Paper</label>
            <select
              name="banglaFirst"
              value={banglaFirst}
              onChange={(e) => setBanglaFirst(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>
                Chose One
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="Empty">Empty</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="banglaSecond">Bangla Second Paper</label>
            <select
              name="banglaSecond"
              value={banglaSecond}
              onChange={(e) => setBanglaSecond(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>
                Chose One
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="Empty">Empty</option>
            </select>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <label htmlFor="englishFirst">English First Paper</label>
            <select
              name="englishFirst"
              value={englishFirst}
              onChange={(e) => setEnglishFirst(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>
                Chose One
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="Empty">Empty</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="englishSecond">English Second Paper</label>
            <select
              name="englishSecond"
              value={englishSecond}
              onChange={(e) => setEnglishSecond(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>
                Chose One
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="Empty">Empty</option>
            </select>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <label htmlFor="mathematics">Mathematics</label>
            <select
              name="mathematics"
              value={mathematics}
              onChange={(e) => setMathematics(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>
                Chose One
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="Empty">Empty</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="ict">ICT</label>
            <select
              name="ict"
              value={ict}
              onChange={(e) => setIct(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>
                Chose One
              </option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="Empty">Empty</option>
            </select>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <label htmlFor="cgpa">CGPA</label>
            <input
              type="number"
              name="cgpa"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              className="form-control"
              placeholder="CGPA"
              required
            />
          </div>
          <div className="col">
            <input
              type="submit"
              value="Submit"
              id="contactUsSubmitBtn"
              className="my-4"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
