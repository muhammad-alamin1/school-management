import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import SearchQuery from "../../Components/Search/SearchQuery";
import DashboardPanel from "../DashboardPanel/DashboardPanel";
import SubjectForm from "./SubjectForm";

export default function ClassTen() {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [cls, setCls] = useState("");
  const [section, setSection] = useState("");
  const [roll, setRoll] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // usr
  const usr = {
    email,
    cls,
    section,
    roll,
  };

  // get all profile data
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/user/all-profile-data")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const filterData = response.data.data.filter((usr) => {
            return usr.user_class === "10" && usr.status === "Approved";
          });

          if (filterData) {
            setProfiles(filterData);
          } else {
            setError("Data not found.!");
          }
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

  // search implement
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = {
    nodes: profiles.filter((item) => item.email.includes(search)),
  };

  const handleClick = (email, cls, section, roll) => {
    setEmail(email);
    setCls(cls);
    setSection(section);
    setRoll(roll);
  };

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="py-4">Class Ten Students (Total - {profiles.length})</h2>
        <SearchQuery
          handleSearch={handleSearch}
          searchBy="email
        "
        />
        <div className="row">
          <div className="col-md-6">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Class</th>
                  <th scope="col">Section</th>
                  <th scope="col">Roll</th>
                  <th scope="col" className="bg-secondary">
                    Send
                  </th>
                </tr>
              </thead>
              <tbody>
                {profiles &&
                  data.nodes.map((node, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{node.full_name}</td>
                      <td>{node.email}</td>
                      <td>{node.user_class}</td>
                      <td>{node.section}</td>
                      <td>{node.roll}</td>
                      <td>
                        <button
                          type="btn"
                          onClick={() =>
                            handleClick(
                              node.email,
                              node.user_class,
                              node.section,
                              node.roll
                            )
                          }
                          className="btn btn-outline-secondary"
                          style={{ boxShadow: "none" }}
                        >
                          <FontAwesomeIcon icon={faShare} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <SubjectForm usr={usr} />
          </div>
        </div>
      </div>
    </>
  );
}
