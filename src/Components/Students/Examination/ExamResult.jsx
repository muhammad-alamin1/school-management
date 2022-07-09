import { useEffect, useState } from "react";
import axiosInstance from "../../../Hooks/axios";
import noPhoto from "../../../images/nophoto.png";
import DashboardPanel from "../../Admin/DashboardPanel/DashboardPanel";

export default function ExamResult() {
  const [profile, setProfile] = useState({});
  const [exams, setExams] = useState([]);

  // user data
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  // get single user profile data
  useEffect(() => {
    axiosInstance
      .get(`/user/single-user/${parseUserData.email}`)
      .then((response) => {
        // console.log(response.data.data);
        if (response.status === 200 || response.status === 201) {
          setProfile(response?.data.data);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [parseUserData.email]);

  // exam result
  useEffect(() => {
    axiosInstance
      .get(`exam-result/single-result/${parseUserData.email}`)
      .then((response) => {
        console.log(response.data.data);
        if (response.status === 200 || response.status === 201) {
          setExams(response?.data.data);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [parseUserData.email]);

  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h2 className="my-4">Exam Result</h2>
        <div className="student-profile py-4">
          <div className="container">
            <div className="row">
              <div class="col-lg-4 mb-4">
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
                    <p class="mb-0">
                      <strong class="pr-1">Roll No.: </strong>
                      {profile ? `${profile.roll}` : "Empty"}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Profile: </strong>
                      {profile ? `${profile.status}` : "Empty"}
                    </p>
                  </div>
                </div>
              </div>
              {exams &&
                exams.map((exam) => (
                  <div class="col-lg-8 mb-4">
                    <div class="card shadow-sm">
                      <div class="card-header bg-transparent border-0">
                        <h3 class="mb-0 text-center p-3">{exam.exam_title}</h3>
                      </div>
                      <div class="card-body pt-0">
                        <table class="table table-bordered">
                          <tr>
                            <th width="30%">Bangla First Paper</th>
                            <td width="2%">:</td>
                            <td>
                              {exam.bangla_first ? exam.bangla_first : "Empty"}
                            </td>
                          </tr>
                          <tr>
                            <th width="30%">Bangla Second Paper </th>
                            <td width="2%">:</td>
                            <td>
                              {exam.bangla_second
                                ? exam.bangla_second
                                : "Empty"}
                            </td>
                          </tr>
                          <tr>
                            <th width="30%">English First Paper</th>
                            <td width="2%">:</td>
                            <td>
                              {exam.english_first
                                ? exam.english_first
                                : "Empty"}
                            </td>
                          </tr>
                          <tr>
                            <th width="30%">English Second Paper</th>
                            <td width="2%">:</td>
                            <td>
                              {exam.english_second
                                ? exam.english_second
                                : "Empty"}
                            </td>
                          </tr>
                          <tr>
                            <th width="30%">Mathematics</th>
                            <td width="2%">:</td>
                            <td>
                              {exam.mathematics ? exam.mathematics : "Empty"}
                            </td>
                          </tr>
                          <tr>
                            <th width="30%">ICT</th>
                            <td width="2%">:</td>
                            <td>{exam.ict ? exam.ict : "Empty"}</td>
                          </tr>
                          <tr>
                            <th width="30%" className="py-3">
                              <h6>CGPA</h6>
                            </th>
                            <td width="2%">:</td>
                            <td>
                              <h6>{exam.cgpa ? exam.cgpa : "Empty"}</h6>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
