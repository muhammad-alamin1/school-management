import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllRegisterData from "./Components/Admin/AllRegisterData/AllRegisterData";
import EditSingleUserInfo from "./Components/Admin/AllRegisterData/EditSingleUserInfo";
import DashboardPanel from "./Components/Admin/DashboardPanel/DashboardPanel";
import StudentAdmission from "./Components/Admin/StudentAdmission/StudentAdmission";
import StudentAdmissionInfo from "./Components/Admin/StudentAdmission/StudentAdmissionInfo";
import AddTeacher from "./Components/Admin/Teacher/AddTeacher";
import EditTeacherInfo from "./Components/Admin/Teacher/EditTeacherInfo";
import TeachersInformation from "./Components/Admin/Teacher/TeachersInformation";
import AdminRoute from "./Components/Auth/AdminRoute/AdminRoute";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/Auth/PublicRoute/PublicRoute";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import Home from "./Components/Pages/Home/Home";
import OurTeachers from "./Components/Pages/OurTeachersList/OurTeachers";
import Register from "./Components/Pages/Register/Register";
import SignIn from "./Components/Pages/SignIn/SignIn";

// https://demo.smart-school.in/admin/admin/dashboard

function App() {
  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);
  // console.log(JSON.parse(user));

  return (
    <BrowserRouter>
      <Routes>
        {/* Admin route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/admin/all-register"
          element={
            <AdminRoute>
              <AllRegisterData />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/edit/student/:email"
          element={
            <AdminRoute>
              <EditSingleUserInfo />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/student/admission"
          element={
            <AdminRoute>
              <StudentAdmission />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/student/admission/info"
          element={
            <AdminRoute>
              <StudentAdmissionInfo />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/add-teacher/"
          element={
            <AdminRoute>
              <AddTeacher />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/teacher/information"
          element={
            <AdminRoute>
              <TeachersInformation />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/admin/teacher/update/:id"
          element={
            <AdminRoute>
              <EditTeacherInfo />
            </AdminRoute>
          }
        />

        {/* ==== Admin route end ==== */}

        {/* Public route */}

        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/our-teachers" element={<OurTeachers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
