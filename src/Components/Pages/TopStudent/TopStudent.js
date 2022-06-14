import React from "react";
import TopStudentList from "../../Components/TopStudentList/TopStudentList";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

export default function TopStudent() {
  return (
    <>
      <Nav />
      <TopStudentList />
      <Footer />
    </>
  );
}
