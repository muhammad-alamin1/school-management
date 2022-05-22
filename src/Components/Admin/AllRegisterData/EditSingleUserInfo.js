import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Hooks/axios";
import DashboardPanel from "../DashboardPanel/DashboardPanel";

export default function EditSingleUserInfo() {
  const { email } = useParams();
  const [student, setStudent] = useState({});

  // get data
  useEffect(() => {
    axiosInstance
      .get(`/auth/single-student/${email}`)
      .then((response) => {
        console.log(response.data.data);
        setStudent(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  // handle change
  const handleChange = (e) => {
    const newData = { ...student };
    newData[e.target.name] = e.target.value;
    setStudent(newData);
  };
  return (
    <>
      <DashboardPanel />
      <div className="sidebar-margin">
        <h3 className="my-4">Update information</h3>

        <form>
          <div class="row">
            <div class="col">
              <label for="name">Full name</label>
              <input
                type="text"
                name="full_name"
                class="form-control"
                placeholder="First name"
                value={student?.full_name}
                onChange={handleChange}
              />
            </div>
            <div class="col">
              <label for="name">Username</label>
              <input
                type="text"
                name="user_name"
                class="form-control"
                placeholder="Last name"
                value={student?.user_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="row my-3">
            <div class="col-md-4">
              <label for="name">Email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="E-mail"
                value={student?.email}
                onChange={handleChange}
                disabled
              />
            </div>
            <div class="col-md-4">
              <label for="name">Phone</label>
              <input
                type="text"
                name="phone"
                class="form-control"
                placeholder="Phone"
                value={student?.phone}
                onChange={handleChange}
                disabled
              />
            </div>
            <div class="col-md-4">
              <label for="name">Role</label>
              <select name="role" class="form-control">
                <option value="user">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Update Info"
            className="btn btn-outline-success"
          />
        </form>
      </div>
    </>
  );
}
