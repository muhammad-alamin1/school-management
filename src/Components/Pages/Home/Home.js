import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Background from "../../Components/Background/Background";
import Header from "../../Components/Header/Header";
import HeroBox from "../../Components/HeroBox/HeroBox";
import Life from "../../Components/Life/Life";
import Notification from "../../Components/Notification/Notification";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <HeroBox />
      <AboutUs />
      <Life />
      <Background />
      <Notification />
      <Footer />
    </div>
  );
}
