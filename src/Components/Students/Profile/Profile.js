import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import noPhoto from "../../../images/nophoto.png";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";
import "./profile.css";

export default function Profile() {
  const [profile, setProfile] = useState({});

  // user data
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  // get single user profile data
  useEffect(() => {
    axiosInstance
      .get(`/user/single-user/${parseUserData.email}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setProfile(response?.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <div class="student-profile py-4">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card shadow-sm">
                  <div class="card-header bg-transparent text-center">
                    {profile && profile.avatar ? (
                      <img
                        className="profile_img img-responsive img-rounded"
                        src={`http://localhost:8000/uploads/${profile.avatar}`}
                        alt="User picture"
                      />
                    ) : (
                      <img
                        className="profile_img img-responsive img-rounded"
                        src={noPhoto}
                        alt="User picture"
                      />
                    )}
                    {profile ? (
                      <h3>{profile.full_name}</h3>
                    ) : (
                      <h3>{`${parseUserData.user_name}`}</h3>
                    )}
                  </div>
                  <div class="card-body">
                    <p class="mb-0">
                      <strong class="pr-1">Student ID: </strong>
                      {profile ? `${profile._id}` : "Empty"}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Class: </strong>
                      {profile ? `${profile.user_class}` : "Empty"}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Section: </strong>
                      {profile ? `${profile.section}` : "Empty"}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="card shadow-sm">
                  <div class="card-header bg-transparent border-0">
                    <h3 class="mb-0">General Information</h3>
                  </div>
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Roll</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.roll}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">Academic Year </th>
                        <td width="2%">:</td>
                        <td>{new Date().getFullYear()}</td>
                      </tr>
                      <tr>
                        <th width="30%">Gender</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.gender}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">Religion</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.religion}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date of Birth</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.dob}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">E-mail</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.email}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">Mobile Number</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.phone}` : "Empty"}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="card shadow-sm my-3">
                  <div class="card-header bg-transparent border-0">
                    <h3 class="mb-0">Address Detail</h3>
                  </div>
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Current Address</th>
                        <td width="2%">:</td>
                        <td>
                          {profile ? `${profile.current_address}` : "Empty"}
                        </td>
                      </tr>
                      <tr>
                        <th width="30%">Permanent Address</th>
                        <td width="2%">:</td>
                        <td>
                          {profile ? `${profile.permanent_address}` : "Empty"}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="card shadow-sm my-3">
                  <div class="card-header bg-transparent border-0">
                    <h3 class="mb-0">Parent / Guardian Details</h3>
                  </div>
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Father Name</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.father_name}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">Father Mobile Number</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.father_phone}` : "Empty"}</td>
                      </tr>
                      <tr>
                        <th width="30%">Father Occupation</th>
                        <td width="2%">:</td>
                        <td>
                          {profile ? `${profile.father_occupation}` : "Empty"}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="card shadow-sm my-3">
                  <div class="card-header bg-transparent border-0">
                    <h3 class="mb-0">Others Information</h3>
                  </div>
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Last Update</th>
                        <td width="2%">:</td>
                        <td>{profile ? `${profile.updatedAt}` : "Empty"}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
