import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPanel from "./Components/Admin/DashboardPanel/DashboardPanel";
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
