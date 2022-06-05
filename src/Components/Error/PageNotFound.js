import React from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import "./notFound.css";

export default function PageNotFound() {
  return (
    <>
      <Nav />
      <div className="text-center" style={{ color: "red" }}>
        <h1 className="mt-5">Aww...Don't Cry</h1>
        <h4 className="mb-5">It's a just 404 Error.!</h4>
      </div>
      <Footer />
    </>
  );
}
