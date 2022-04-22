import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroBox from "../../Components/HeroBox/HeroBox";
import Nav from "../../Components/Nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <HeroBox />
      <Footer />
    </div>
  );
}
