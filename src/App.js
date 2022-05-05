import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPanel from "./Components/Admin/DashboardPanel/DashboardPanel";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Pages/Register/Register";
import SignIn from "./Components/Pages/SignIn/SignIn";

// https://demo.smart-school.in/admin/admin/dashboard

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin route */}
        <Route path="/admin/dashboard" element={<DashboardPanel />} />

        {/* Public route */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
