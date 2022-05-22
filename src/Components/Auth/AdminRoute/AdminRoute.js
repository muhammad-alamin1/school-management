import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function AdminRoute({ children }) {
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  const user = localStorage.getItem("user");
  const parseUserData = JSON.parse(user);

  if (
    token &&
    parseUserData.email === "muhammad.alamindev01@gmail.com" &&
    parseUserData.role === "admin"
  ) {
    return children;
  }
  return <Navigate to="/" />;
}
