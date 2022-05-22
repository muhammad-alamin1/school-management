import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllRegisterData from "./Components/Admin/AllRegisterData/AllRegisterData";
import EditSingleUserInfo from "./Components/Admin/AllRegisterData/EditSingleUserInfo";
import DashboardPanel from "./Components/Admin/DashboardPanel/DashboardPanel";
import AdminRoute from "./Components/Auth/AdminRoute/AdminRoute";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/Auth/PublicRoute/PublicRoute";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import Home from "./Components/Pages/Home/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
