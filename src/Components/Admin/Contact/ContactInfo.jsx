import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function ContactInfo() {
  const [contacts, setContacts] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // get all contact data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/contact-us/all-contact-info")
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          setContacts(response.data.data);
          console.log(response.data.data);
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

  // delete contact
  const deleteContact = async (id) => {
    try {
      await axiosInstance
        .delete(`/contact-us/delete/${id}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setSuccess("Contact information deleted successfully.!");
            setError("");
          } else {
            setError("Contact information deleted failed.!");
            setSuccess("");
          }
        })
        .catch((err) => {
          setError("Contact information deleted failed.!");
          setSuccess("");
        });
    } catch (error) {
      setError(
        "Contact information deleted failed.! There was an server side error.!"
      );
      setSuccess("");
    }
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Contact Form Information</h3>

        <div>
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

          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Subject</th>
                <th scope="col">Description</th>
                <th scope="col">CreatedAt</th>
                <th scope="col">Mail</th>
                <th scope="col" className="bg-secondary">
                  Action
                </th>
              </tr>
            </thead>
            {contacts &&
              contacts.map((contact, index) => (
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.subject}</td>
                    <td>{contact.description}</td>
                    <td>
                      {new Date(contact.createdAt).toLocaleDateString("en-US")}
                    </td>
                    <td>
                      <a
                        href={`https://mail.google.com/mail/u/0/#inbox?compose=new`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ fontSize: "1.3rem" }}
                        />
                      </a>
                    </td>

                    <td>
                      <a
                        onClick={() => deleteContact(contact._id)}
                        className="direction"
                        href=""
                        style={{ color: "red" }}
                      >
                        <span className="material-icons-outlined">delete</span>
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </>
  );
}
