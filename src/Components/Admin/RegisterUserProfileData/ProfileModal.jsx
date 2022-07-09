import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";

export default function ProfileModal({ profileId }) {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(profileId);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/user/single-user/${profileId}`)
      .then((response) => {
        // console.log(response);

        if (response.status === 200 || response.status === 201) {
          setProfile(response.data.data);
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

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success text-white p-2 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FontAwesomeIcon icon={faEye} style={{ marginRight: "7px" }} />
        View
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg text-dark">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {profile.full_name}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6 className="mb-4 text-center">General Information</h6>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={`http://localhost:8000/uploads/${profile.avatar}`}
                    alt="user"
                    width="100"
                  />
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Class: </strong>
                        {profile.user_class}
                      </p>
                    </div>
                    <div className="col">
                      <strong>Phone: </strong>
                      {profile.phone}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Mail: </strong>
                        {profile.email ? profile.email : "Empty"}
                      </p>
                    </div>
                    <div className="col">
                      <strong>Nation ID: </strong>
                      {profile.national_id_number}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>DOB: </strong>
                        {profile.dob}
                      </p>
                    </div>
                    <div className="col">
                      <strong>Religion: </strong>
                      {profile.religion}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>SEX: </strong>
                        {profile.gender}
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        <strong>Status: </strong>
                        {profile.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="my-4 text-center">Guardian Information</h6>
              <div className="row my-4">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Name: </strong>
                        {profile.father_name}
                      </p>
                    </div>
                    <div className="col">
                      <strong>Phone: </strong>
                      {profile.father_phone}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>
                        <strong>Mail: </strong>
                        {profile.guardian_email
                          ? profile.guardian_email
                          : "Empty"}
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        <strong>Occupation: </strong>
                        {profile.father_occupation}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <strong>Address: </strong>
                      {profile.current_address}
                    </div>
                    <div className="col">
                      <p>
                        <strong>Permanent Address: </strong>
                        {profile.permanent_address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="my-4 text-center">Others Information</h6>
              <div className="row my-4">
                <div className="col-md-3">
                  <p>
                    <strong>CreatedAt: </strong>
                    {new Date(profile.createdAt).toLocaleDateString("en-US")}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>UpdatedAt: </strong>
                    {new Date(profile.updatedAt).toLocaleDateString("en-US")}
                  </p>
                </div>
                <div className="col-md-4">
                  <p>
                    <strong>Database ID: </strong>
                    {profile._id}
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
