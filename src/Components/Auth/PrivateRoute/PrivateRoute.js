import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function PrivateRoute({ children }) {
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
}
