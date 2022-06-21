import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import "./contactUs.css";

export default function ContactUs() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  // handle change
  const handleChange = (event) => {
    const newData = { ...values };
    newData[event.target.name] = event.target.value;
    setValues(newData);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // axios post req
    axios
      .post(`http://localhost:8000/contact-us/add-contact`, values)
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          setSuccess(response.data.message);
          setError("");
          setErrors("");
          const newData = { ...values };
          newData.name = "";
          newData.email = "";
          newData.subject = "";
          newData.description = "";
          setValues(newData);
        } else {
          setSuccess("");
          setError("Failed to send your message.!");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setSuccess("");
        setErrors(error?.response.data.errors);
        setError("Failed to send your message.!");
        setLoading(false);
      });
  };

  return (
    <>
      <Nav />
      <div className="container" id="contactUS">
        <h2 className="my-5">Send In Your Query</h2>

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
          <div className="form-group row  my-3">
            <div className="col-md-2">
              <label for="name">Name</label>
            </div>
            <div className="col-md-10">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.name && errors?.name.msg}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row  my-3">
            <div className="col-md-2">
              <label for="email">Email</label>
            </div>
            <div className="col-md-10">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.email && errors?.email.msg}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row my-3">
            <div className="col-md-2">
              <label for="subject">Subject</label>
            </div>
            <div className="col-md-10">
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className="form-control"
                required
              />
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.subject && errors?.subject.msg}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row my-3">
            <div className="col-md-2">
              <label for="description">Description</label>
            </div>
            <div className="col-md-10">
              <textarea
                className="form-control"
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder="Enter Description"
              ></textarea>
              {errors && (
                <div style={{ color: "red" }}>
                  {errors?.description && errors?.description.msg}
                </div>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            id="contactUsSubmitBtn"
            className="my-5"
          />
        </form>
        <div className="row text-center my-5">
          <div class="card text-center" id="contactUsCard">
            <div class="card-body">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              />
              <h4>OUR LOCATION</h4>
              <span>
                7 No. Betmore Rejpara, Mathbaria, Pirojpur, Bangladesh.
              </span>
            </div>
          </div>
          <div class="card text-center" id="contactUsCard">
            <div class="card-body">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              />
              <h4>CALL US</h4>
              <span>Email: muhammad.alamindev01@gmail.com</span> <br />
              <span>Phone: +8801315792303</span>
            </div>
          </div>
          <div class="card text-center" id="contactUsCard">
            <div class="card-body">
              <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              />
              <h4>WORKING HOURS</h4>
              <span>Sun-Tue 9 am to 2 pm.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
